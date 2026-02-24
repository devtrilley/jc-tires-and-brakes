from flask import Blueprint, request, jsonify
from models import db
from models.lead import Lead
from utils.jwt_utils import verify_token

admin_bp = Blueprint("admin", __name__)


def check_jwt_auth():
    # Let CORS preflight requests through
    if request.method == "OPTIONS":
        return True

    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return None

    token = auth_header.split(" ")[1]
    return verify_token(token)


@admin_bp.route("/leads", methods=["GET", "OPTIONS"])
def get_leads():
    payload = check_jwt_auth()

    if not payload:
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    try:
        # Get filter parameters
        status = request.args.get("status")
        priority = request.args.get("priority")

        # Build query
        query = Lead.query

        if status and status != "all":
            query = query.filter_by(status=status)

        if priority and priority != "all":
            query = query.filter_by(priority_label=priority)

        # Order by created_at descending
        leads = query.order_by(Lead.created_at.desc()).all()

        return (
            jsonify({"success": True, "leads": [lead.to_dict() for lead in leads]}),
            200,
        )

    except Exception as e:
        print(f"Error fetching leads: {e}")
        return jsonify({"success": False, "message": "Failed to fetch leads"}), 500


@admin_bp.route("/leads/<int:lead_id>", methods=["PATCH", "OPTIONS"])
def update_lead(lead_id):
    if request.method == "OPTIONS":
        return "", 200

    payload = check_jwt_auth()
    if not payload:
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    try:
        lead = Lead.query.get(lead_id)

        if not lead:
            return jsonify({"success": False, "message": "Lead not found"}), 404

        data = request.get_json()

        if "status" in data:
            lead.status = data["status"]

        db.session.commit()

        return jsonify({"success": True, "lead": lead.to_dict()}), 200

    except Exception as e:
        print(f"Error updating lead: {e}")
        db.session.rollback()
        return jsonify({"success": False, "message": "Failed to update lead"}), 500
