from flask import Blueprint, request, jsonify
from models import db
from models.admin import Admin
from utils.jwt_utils import generate_token, verify_token

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/login", methods=["POST", "OPTIONS"])
def login():
    # ✅ Allow CORS preflight to succeed
    if request.method == "OPTIONS":
        return jsonify({"success": True}), 200

    try:
        data = request.get_json() or {}
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return (
                jsonify({"success": False, "message": "Email and password required"}),
                400,
            )

        # Find admin by email
        admin = Admin.query.filter_by(email=email).first()

        if not admin:
            return jsonify({"success": False, "message": "Invalid credentials"}), 401

        # Check password
        if not admin.check_password(password):
            return jsonify({"success": False, "message": "Invalid credentials"}), 401

        # Generate JWT token
        token = generate_token(admin.id, admin.email, admin.role)

        return jsonify({"success": True, "token": token, "user": admin.to_dict()}), 200

    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({"success": False, "message": "Login failed"}), 500


@auth_bp.route("/me", methods=["GET"])
def get_current_user():
    """Get current user from JWT token"""
    try:
        # Get token from Authorization header
        auth_header = request.headers.get("Authorization")

        if not auth_header or not auth_header.startswith("Bearer "):
            return jsonify({"success": False, "message": "No token provided"}), 401

        token = auth_header.split(" ")[1]

        # Verify token
        payload = verify_token(token)

        if not payload:
            return (
                jsonify({"success": False, "message": "Invalid or expired token"}),
                401,
            )

        # Get admin from database
        admin = Admin.query.get(payload["user_id"])

        if not admin:
            return jsonify({"success": False, "message": "User not found"}), 404

        return jsonify({"success": True, "user": admin.to_dict()}), 200

    except Exception as e:
        print(f"Get current user error: {e}")
        return jsonify({"success": False, "message": "Authentication failed"}), 500
