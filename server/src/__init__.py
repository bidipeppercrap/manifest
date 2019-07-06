import os

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from ..config import set_config

def create_app():
    app = Flask(__name__)
    set_config(app)
    db = SQLAlchemy(app)

    @app.route("/")
    def index():
        return jsonify({
            "website": "https://bidipeppercrap.com",
            "author": "bidipeppercrap"
        })

    return app
