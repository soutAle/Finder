from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    user_type = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50))
    testimony = db.Column(db.String(250))
    image = db.Column(db.String(250))
    telephone = db.Column(db.String(30), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), nullable=False)
    is_active = db.Column(db.Boolean, default=False)
    country = db.Column(db.String(20))

    profile_developer = db.relationship("Developer", backref="user", uselist=False)
    profile_company = db.relationship("Company", backref="user", uselist=False)
    candidates = db.relationship("Candidate", backref="user", lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            'user_type': self.user_type,
            "last_name": self.last_name,
            "testimony": self.testimony,
            "image": self.image,
            "telephone": self.telephone,
            "email": self.email,
            "is_active": self.is_active,
            "country": self.country,
            "profile_developer": self.profile_developer.serialize() if self.profile_developer else None,
            "profile_company": self.profile_company.serialize() if self.profile_company else None,
            "candidates": [candidate.serialize() for candidate in self.candidates] if self.candidates else None
        }
    
class Company(db.Model):
    __tablename__ = "companies"
    
    description = db.Column(db.String(200))
    location = db.Column(db.String(50))
    website = db.Column(db.String(120))
    premium = db.Column(db.Boolean ,default=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)

    offers = db.relationship("Offer", backref="company", lazy=True)
    bookmarks = db.relationship("Bookmark", backref="company", lazy=True)

    def __repr__(self):
        return f'<Company {self.user.name}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "name": self.user.name,
            "description": self.description,
            "location": self.location,
            "website": self.website,
            "premium": self.premium,
            "offers": [offer.serialize() for offer in self.offers] if self.offers else None,
            "bookmarks": [bookmark.serialize() for bookmark in self.bookmarks] if self.bookmarks else None
            
        }

class Developer(db.Model):
    __tablename__ = "developers"
    
    description = db.Column(db.String(200))
    role = db.Column(db.String(80))
    location = db.Column(db.String(80))
    premium = db.Column(db.Boolean ,default=False)
    experience = db.Column(db.String(80))
    tecnologies = db.Column(db.String(200))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)

    projects = db.relationship("Project", backref="developer", lazy=True)
    bookmarks = db.relationship("Bookmark", backref="developer", lazy=True)

    def __repr__(self):
        return f'<Developer {self.user.name} {self.user.last_name}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "name": self.user.name,
            "role": self.role,
            "description": self.description,
            "experience": self.experience,
            "premium": self.premium,
            "location": self.location,
            "projects": [project.serialize() for project in self.projects] if self.projects else None,
            "bookmarks": [bookmark.serialize() for bookmark in self.bookmarks] if self.bookmarks else None
        }
   
class Offer(db.Model):
    __tablename__ = "offers"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.String(7))
    contract_type = db.Column(db.String(50))
    modality = db.Column(db.String(250))
    languages = db.Column(db.String(20))
    posted_date = db.Column(db.Date)
    education_level = db.Column(db.String(70))
    minimun_experience = db.Column(db.String(120))
    minimun_requirements = db.Column(db.String(120))

    company_id = db.Column(db.Integer, db.ForeignKey('companies.user_id'))

    def __repr__(self):
        return f'<Offer {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "location": self.location,
            "salary": self.salary,
            "contract_type": self.contract_type,
            "languages": self.languages,
            "modality": self.modality,
            "posted_date": self.posted_date,
            "education_level": self.education_level,
            "minimun_experience": self.minimun_experience,
            "minimun_requirements": self.minimun_requirements,
            "company_id": self.company_id
        }
    
class Candidate(db.Model):
    __tablename__ = "candidates"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    resume_url = db.Column(db.String(500), nullable=False)
    status = db.Column(db.String(20), nullable=False, default='pendiente') 
    application_date = db.Column(db.DateTime, default=db.func.current_timestamp())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    offer_id = db.Column(db.Integer, db.ForeignKey('offers.id'), nullable=False)

    offer = db.relationship('Offer', backref='candidates', lazy=True)

    def __repr__(self):
        return f'<Candidate {self.name} {self.last_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "resume_url": self.resume_url,
            "user_id": self.user_id,
            "user_email": self.user.email,
            "offer_id": self.offer_id,
            "offer_title": self.offer.title,
            "status": self.status,
            "application_date": self.application_date.strftime("%Y-%m-%d")
        }

class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(150), nullable=False)
    git_url = db.Column(db.String(300))
    project_link = db.Column(db.String(500))
    technologies = db.Column(db.String(200), nullable=False)

    developer_id = db.Column(db.Integer, db.ForeignKey("developers.user_id"), nullable=False)

    def __repr__(self):
        return f'<Project {self.id} - {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "git_url": self.git_url,
            "project_link": self.project_link,
            "technologies": self.technologies,
            "developer_id": self.developer_id
        }

    
class Bookmark(db.Model):
    __tablename__ = "bookmarks"
    id = db.Column(db.Integer, primary_key=True)

    developer_id = db.Column(db.Integer, db.ForeignKey("developers.user_id"), nullable=True)
    company_id = db.Column(db.Integer, db.ForeignKey("companies.user_id"), nullable=True)
    offer_id = db.Column(db.Integer, db.ForeignKey("offers.id"), nullable=True)

    def __repr__(self):
        return f'<Favoritos {self.developer_id}-{self.company_id}-{self.offer_id}>'

    def serialize(self):
        return {
            "developer_id": self.developer_id,
            "company_id": self.company_id,
            "offer_id": self.offer_id
        }
    
    