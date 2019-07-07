import os

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from flask_jwt_extended import JWTManager, jwt_required, create_access_token

from config import set_config
from src.auth import authenticate, identify

app = Flask(__name__)
set_config(app)

db = SQLAlchemy(app)
api = Api(app)
jwt = JWTManager(app)

@app.errorhandler(KeyError)
def no_field(error):
    return f"Please provide {error}.", 400

class Root(Resource):
    @jwt_required
    def get(self):
        return {
            "author": "bidipeppercrap",
            "website": "https://bidipeppercrap.com"
        }

class Auth(Resource):
    def post(self):
        data = request.get_json()

        access_token = create_access_token(identity=data["email"])
        return jsonify({
            "access_token": access_token
        })

api.add_resource(Root, "/")
api.add_resource(Auth, "/auth")