import os
from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from routes.quote_routes import quote_bp
from routes.admin_routes import admin_bp
from routes.auth_routes import auth_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # CORS configuration - allow all origins
    CORS(
        app,
        resources={
            r"/*": {
                "origins": "*",
                "methods": ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
                "allow_headers": ["Content-Type", "Authorization"],
            }
        },
    )

    # Initialize database
    db.init_app(app)

    # Register blueprints (SlotMe-style flat routes)
    app.register_blueprint(quote_bp)
    app.register_blueprint(admin_bp, url_prefix="/admin")
    app.register_blueprint(auth_bp, url_prefix="/auth")

    # Health check endpoint
    @app.route("/health")
    def health():
        return {"status": "ok"}, 200

    # Create tables and seed admin if needed
    with app.app_context():
        db.create_all()

        # Auto-create admin user if none exists
        from models.admin import Admin

        if Admin.query.count() == 0:
            admin = Admin(email=app.config["DEFAULT_ADMIN_EMAIL"], role="admin")
            admin.set_password(app.config["DEFAULT_ADMIN_PASSWORD"])
            db.session.add(admin)
            db.session.commit()
            print(f"✅ Default admin created: {admin.email}")

    return app


if __name__ == "__main__":
    app = create_app()
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
else:
    # For Gunicorn/production
    app = create_app()
