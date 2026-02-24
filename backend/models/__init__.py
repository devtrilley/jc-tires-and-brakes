from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import models here to avoid circular imports
from models.lead import Lead
from models.admin import Admin