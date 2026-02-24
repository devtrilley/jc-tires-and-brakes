from app import create_app
from models import db
from models.admin import Admin

def create_admin_user(email, password):
    """Create a new admin user"""
    app = create_app()
    
    with app.app_context():
        # Check if admin already exists
        existing_admin = Admin.query.filter_by(email=email).first()
        
        if existing_admin:
            print(f"Admin with email {email} already exists!")
            return
        
        # Create new admin
        admin = Admin(email=email, role='admin')
        admin.set_password(password)
        
        db.session.add(admin)
        db.session.commit()
        
        print(f"✅ Admin user created successfully!")
        print(f"Email: {email}")
        print(f"Password: {password}")
        print(f"\nYou can now log in at http://localhost:5173/login")

if __name__ == '__main__':
    email = input("Enter admin email: ")
    password = input("Enter admin password: ")
    
    create_admin_user(email, password)