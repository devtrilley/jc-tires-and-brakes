from datetime import datetime
from . import db


class Lead(db.Model):
    __tablename__ = "doonga_leads"

    id = db.Column(db.Integer, primary_key=True)

    # Contact info
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(50), nullable=False)

    # Vehicle info
    vehicle_year = db.Column(db.String(10), nullable=True)
    vehicle_make = db.Column(db.String(50), nullable=True)
    vehicle_model = db.Column(db.String(50), nullable=True)
    mileage = db.Column(db.String(20), nullable=True)

    # Service details
    tier = db.Column(db.String(50), nullable=True)       # service type
    symptoms = db.Column(db.Text, nullable=True)          # JSON array string
    notes = db.Column(db.Text, nullable=True)
    urgency = db.Column(db.String(50), nullable=True)

    # Lead management
    priority_score = db.Column(db.Integer, default=0)
    status = db.Column(db.String(50), default="new")      # new, contacted, closed

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "vehicle_year": self.vehicle_year,
            "vehicle_make": self.vehicle_make,
            "vehicle_model": self.vehicle_model,
            "mileage": self.mileage,
            "tier": self.tier,
            "symptoms": self.symptoms,
            "notes": self.notes,
            "urgency": self.urgency,
            "priority_score": self.priority_score,
            "priority": self.get_priority(),
            "priority_label": self.get_priority_label(),
            "status": self.status,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }

    def get_priority(self):
        if self.priority_score >= 4:
            return "hot"
        elif self.priority_score >= 2:
            return "warm"
        else:
            return "cold"

    def get_priority_label(self):
        if self.priority_score >= 4:
            return "🔥 HOT"
        elif self.priority_score >= 2:
            return "🟡 WARM"
        else:
            return "❄️ COLD"