"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Developer, Company, Candidate, Project, Offer, Bookmark
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required
from flask_bcrypt import generate_password_hash, check_password_hash  
import stripe


api = Blueprint('api', __name__)
stripe.api_key = 'sk_test_51PsqIxG3cEcyZuNprPRA1UTti31vG7fgiVVBfefTiZ61KUnQpESthKWS5oV9QFWCQoVsWzLbAJLmGP7npT9Wejth00qZpNlIhY'


# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def signup_user():

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user_type = request.json.get('user_type', None)
    name = request.json.get('name', None)
    # cif= request.json.get("cif", None)
    last_name = request.json.get('last_name', None)
    telephone = request.json.get('telephone', None)
    country = request.json.get('country', None)

    if not email or not password or not name:
        return jsonify({'success': False, 'msg': 'Todos los campos son obligatorios'}), 400
    
    email_exist = User.query.filter_by(email=email).first()
    if email_exist:
        return jsonify({'success': False, 'msg':'Ya existe una cuenta registrada con el email '+ email}),400


    hashed_password = generate_password_hash(password).decode('utf-8')
    
    new_user = User(
        email=email,
        password=hashed_password,
        name=name,
        last_name=last_name,
        telephone=telephone,
        country=country,
        user_type=user_type,
        is_active=True
    )

    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)

    if user_type == 'Desarrollador':
        developer = Developer(user_id=new_user.id)
        db.session.add(developer)
        db.session.commit()
        return jsonify({
            'success': True,
            'msg': 'Desarrollador registrado correctamente',
            'user': new_user.serialize(),
            'token': access_token,
            'developer': developer.serialize()
        }), 201
    elif user_type == 'Empresa':
        company = Company(user_id=new_user.id)
        db.session.add(company)
        db.session.commit()
        return jsonify({
            'success': True, 
            'msg':'Usuario registrado correctamente', 
            'user': new_user.serialize(), 
            'token': access_token, 
            'company': company.serialize()}),201


@api.route('/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        if not email or not password:
            return jsonify({'success': False, 'msg': 'Por favor, proporciona correo y contraseña.'}), 400

        user = User.query.filter_by(email=email).first()

        if not user or not check_password_hash(user.password, password):
            return jsonify({'success': False, 'msg': 'Usuario o contraseña incorrectos.'}), 401

        access_token = create_access_token(identity=user.id)

        return jsonify({
            'success': True,
            'msg': 'Inicio de sesión exitoso.',
            'token': access_token,
            'user': user.serialize()
        }), 200
    
    except Exception as e:
        print(f"Error en login: {str(e)}")  
        return jsonify({'success': False, 'msg': 'Ocurrió un error interno, por favor intenta de nuevo.'}), 500

@api.route('/private', methods=['GET'])
@jwt_required()
def page_private():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if user:
        return jsonify({'success': True, 'msg': 'Has logrado entrar a una página privada'}), 200
    return jsonify({'success': False, 'msg': 'No estás logeado'}), 400

@api.route('/token', methods=['GET'])
@jwt_required()
def token():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if user:
        return jsonify({
            "id": user.id,
            "email": user.email,
            "is_active": user.is_active
        }), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
@api.route('/users/<int:user_id>', methods=['GET'])
def get_User(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify({'user': user.serialize()}),200
    return jsonify({'msg':'Usuario no encontrado'}),404

@api.route('/Users', methods=['GET'])
def get_all_Users():
    users = User.query.all()
    users=[user.serialize() for user in users]
    if users:
        return jsonify({'user': users}),200
    return jsonify({'msg':'Ningún usuario encontrado'}),404

@api.route('/user/<int:user_id>/bookmarks', methods=['GET'])
def get_user_bookmark(user_id):
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({"success": False, 'msg': 'Usuario no encontrado'}), 404
    
    bookmarks = []
    results = []
    def loader(el):        
        if el['offer_id'] is not None:
            results.append(Offer.query.get(el['offer_id']))
        elif el['company_id'] is not None:
            results.append(Company.query.get(el['company_id']))
        else:
            return ({"success": True, "msg": "El usuario no tiene favortios "}), 418
            
    if user.profile_developer:
        bookmarks.extend(user.profile_developer.bookmarks)
        bookmarks = [loader(bookmark.serialize()) for bookmark in bookmarks]
    if user.profile_company:
        bookmarks.extend(user.profile_company.bookmarks)  
    return jsonify({"success": True, "bookmarks": [result.serialize() for result in results]}), 200

@api.route('/createOffer', methods=['POST'])
@jwt_required()
def create_offer():
    User = get_jwt_identity()

    company = Company.query.filter_by(user_id=User.id).first()
    if not company:
        return jsonify({"success": False, "msg": "El usuario no es un empleador"}), 400

    title = request.json.get("title")
    description = request.json.get("description")
    salary = request.json.get("salary")
    location = request.json.get("location")
    contract_type = request.json.get("tipo_contrato")
    modality = request.json.get("modality")
    education_level = request.json.get("education_level")
    minimun_requirements = request.json.get("minimun_requirements")
    lenguages = request.json.get("lenguages")
    minimun_experience = request.json.get("minimun_experience")
    posted_date = db.Column(db.DateTime, default=datetime.utcnow)

    
    if not title or not description or not location:
        return jsonify({"success": False, "msg": "Algunos campos son requeridos"}), 400

    try:
        posted_date = datetime.strptime(posted_date, "%Y-%m-%d")
        print(posted_date)
    except ValueError:
        return jsonify({"success": False, "msg": "Fecha de publicación no válida"}), 400

    new_offer = Offer(
        title=title,
        description=description,
        salary=salary,
        localion=location,
        contract_type=contract_type,
        modality=modality,
        lenguages=lenguages,
        education_level=education_level,
        minimun_experience=minimun_experience,
        posted_date=posted_date,
        minimun_requirements=minimun_requirements,
        company_id=company.id
    )
    
    try:
        db.session.add(new_offer)
        db.session.commit()
        return jsonify({"success": True, "msg": "Oferta creada exitosamente", "oferta": new_offer.serialize()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"success": False, "msg": f"Error al crear la oferta: {str(e)}"}), 500
    
@api.route('/offers', methods=['GET'])
def get_all_offers():
    try:
        offers = Offer.query.all()
        if offers:
            return jsonify({"success": True, "offers": [offers.serialize() for offer in offers]}), 200
        return jsonify({"success": False, "msg": "No hay ofertas disponibles"}), 404
    except Exception as e:
        return jsonify({"success": False, "msg": f"Error al obtener las ofertas: {str(e)}"}), 500


@api.route('/offer/<int:id>', methods=['GET'])
def get_offer(id):
    try:
        offer = Offer.query.get(id)

        if not offer:
            return jsonify({"success": False, "msg": "Oferta no encontrada"}), 404
        return jsonify({"success": True,"msg": 'Oferta encontrada', "offer": offer.serialize()}), 200

    except Exception as e:
        return jsonify({"success": False, "msg": f"Error al obtener la oferta: {str(e)}"}), 500

@api.route('/candidates', methods=['POST'])
@jwt_required
def apply_to_offer():
    user_id = get_jwt_identity

    user = User.query.get(user_id)
    if not user: 
        return jsonify({"msg": "Usuario no permitido"}), 401
    
    if not user.profile_developer:
        return jsonify({"msg": "Solo pueden inscribirse perfiles de desarrollador"})
    
    offer_id = request.json.get("offer_id")
    offer = Offer.query.get(offer_id)
    if not offer:
        return jsonify({"msg": "Oferta no encontrada"}), 404
    
    candidate_exist = Candidate.query.filter_by(user_id=user.id, offer_id=offer.id).first()
    if candidate_exist:
        return jsonify({"msg": "Ya estás inscrito en esta oferta"}), 409

    new_candidate = Candidate(user_id=user.id, offer_id=offer.id)
    db.session.add(new_candidate)
    db.session.commit()
    
    return jsonify({"msg": "Inscripcion realizada con éxito."}),200

@api.route('/candidates/<int:offer_id>', methods=['DELETE'])
@jwt_required()
def unapply_from_offer(offer_id):
    user_id = get_jwt_identity()  

    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "Usuario no permitido"}), 401

    offer = Offer.query.get(offer_id)
    if not offer:
        return jsonify({"msg": "Oferta no encontrada o ID inválido"}), 404

    candidate = Candidate.query.filter_by(user_id=user.id, offer_id=offer.id).first()
    if not candidate:
        return jsonify({"msg": "No estás inscrito en esta oferta"}), 404

    db.session.delete(candidate)
    db.session.commit()

    return jsonify({"msg": "Desinscripción realizada con éxito."}), 200