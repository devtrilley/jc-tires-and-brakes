import smtplib
import json
from email.message import EmailMessage
from flask import current_app


def send_new_lead_email(lead_data):
    """Notify JC when a new quote request comes in"""
    config = current_app.config

    vehicle = f"{lead_data.get('vehicle_year', '')} {lead_data.get('vehicle_make', '')} {lead_data.get('vehicle_model', '')}".strip()
    symptoms_raw = lead_data.get("symptoms")
    if symptoms_raw:
        try:
            symptoms = ", ".join(json.loads(symptoms_raw))
        except Exception:
            symptoms = symptoms_raw
    else:
        symptoms = "None reported"

    subject = f"🔔 New Quote Request: {lead_data['name']}"

    body = f"""New quote request from JC's Tire & Brakes website:

Name: {lead_data['name']}
Email: {lead_data['email']}
Phone: {lead_data['phone']}

Vehicle: {vehicle or 'Not provided'}
Mileage: {lead_data.get('mileage') or 'Not provided'}

Service Requested: {lead_data.get('tier', 'N/A')}
Timeline: {lead_data.get('urgency', 'N/A')}
Symptoms: {symptoms}
Notes: {lead_data.get('notes') or 'None'}

Priority: {lead_data.get('priority_label', 'N/A')}
Submitted at: {lead_data['created_at']}
"""

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = f"JC's Tire & Brakes <{config['BREVO_FROM_EMAIL']}>"
    msg["To"] = config["ADMIN_EMAIL"]
    msg.set_content(body)

    with smtplib.SMTP(config["BREVO_SMTP_HOST"], config["BREVO_SMTP_PORT"]) as server:
        server.starttls()
        server.login(config["BREVO_SMTP_USER"], config["BREVO_SMTP_PASS"])
        server.send_message(msg)


def send_user_confirmation_email(lead_data):
    """Send confirmation to the customer"""
    config = current_app.config

    vehicle = f"{lead_data.get('vehicle_year', '')} {lead_data.get('vehicle_make', '')} {lead_data.get('vehicle_model', '')}".strip()

    subject = "We received your quote request — JC's Tire & Brakes"

    body = f"""Hi {lead_data['name']},

Thanks for reaching out to JC's Tire & Brakes! We've received your quote request and will get back to you within 24 hours.

Here's what you submitted:
- Vehicle: {vehicle or 'Not provided'}
- Service: {lead_data.get('tier', 'N/A')}
- Timeline: {lead_data.get('urgency', 'N/A')}
- Contact: {lead_data['email']} | {lead_data['phone']}

If it's urgent, give us a call directly at (704) 919-0401.

- JC's Tire & Brakes Team
7366 E W.T. Harris Blvd, Charlotte, NC 28227

---
This is an automated message. Please do not reply to this email.
"""

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = f"JC's Tire & Brakes <{config['BREVO_FROM_EMAIL']}>"
    msg["To"] = lead_data["email"]
    msg.set_content(body)

    with smtplib.SMTP(config["BREVO_SMTP_HOST"], config["BREVO_SMTP_PORT"]) as server:
        server.starttls()
        server.login(config["BREVO_SMTP_USER"], config["BREVO_SMTP_PASS"])
        server.send_message(msg)