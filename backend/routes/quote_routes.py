from flask import Blueprint, request, jsonify, current_app
from models import db
from models.lead import Lead
from services.email_service import send_new_lead_email, send_user_confirmation_email
from services.lead_scoring import calculate_priority_score
import json

quote_bp = Blueprint("quote", __name__)


@quote_bp.route("/quote", methods=["POST"])
def submit_quote():
    data = request.get_json()

    # Validate required fields
    required = ["name", "email", "phone"]
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({"success": False, "error": f'Missing: {", ".join(missing)}'}), 400

    # Symptoms comes in as a list from the frontend
    symptoms = data.get("symptoms", [])
    symptoms_str = json.dumps(symptoms) if symptoms else None

    priority_score = calculate_priority_score(
        tier=data.get("tier", ""),
        urgency=data.get("urgency", ""),
        symptoms=symptoms,
        vehicle_year=data.get("vehicleYear"),
    )

    lead = Lead(
        name=data["name"],
        email=data["email"],
        phone=data["phone"],
        vehicle_year=data.get("vehicleYear", ""),
        vehicle_make=data.get("vehicleMake", ""),
        vehicle_model=data.get("vehicleModel", ""),
        mileage=data.get("mileage", ""),
        tier=data.get("tier", ""),
        symptoms=symptoms_str,
        notes=data.get("notes", ""),
        urgency=data.get("urgency", ""),
        priority_score=priority_score,
        status="new",
    )

    try:
        db.session.add(lead)
        db.session.commit()

        lead_dict = lead.to_dict()

        try:
            send_new_lead_email(lead_dict)
        except Exception as e:
            current_app.logger.error(f"Admin email failed: {e}")

        try:
            send_user_confirmation_email(lead_dict)
        except Exception as e:
            current_app.logger.error(f"User confirmation email failed: {e}")

        return jsonify({
            "success": True,
            "message": "Quote request received. We'll contact you within 24 hours.",
            "priority": lead_dict.get("priority_label"),
        }), 200

    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Database error: {e}")
        return jsonify({"success": False, "error": "Failed to submit quote request"}), 500