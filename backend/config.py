import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    # Database - PostgreSQL in production, SQLite for local dev
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///doonga.db")

    # Fix for Render PostgreSQL URLs and psycopg3 dialect
    if SQLALCHEMY_DATABASE_URI:
        SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace(
            "postgres://", "postgresql://", 1
        ).replace(
            "postgresql://", "postgresql+psycopg://", 1
        )

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY")

    # Admin defaults
    DEFAULT_ADMIN_EMAIL = os.getenv("DEFAULT_ADMIN_EMAIL")
    DEFAULT_ADMIN_PASSWORD = os.getenv("DEFAULT_ADMIN_PASSWORD")

    # Brevo SMTP
    BREVO_SMTP_HOST = os.getenv("BREVO_SMTP_HOST", "smtp-relay.brevo.com")
    BREVO_SMTP_PORT = int(os.getenv("BREVO_SMTP_PORT", 587))
    BREVO_SMTP_USER = os.getenv("BREVO_SMTP_USER")
    BREVO_SMTP_PASS = os.getenv("BREVO_SMTP_PASS")
    BREVO_FROM_EMAIL = os.getenv("BREVO_FROM_EMAIL")
    ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
