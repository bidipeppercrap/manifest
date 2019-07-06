import os

from flask import Flask, jsonify


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def index():
        return jsonify({
            "website": "https://bidipeppercrap.com",
            "author": "bidipeppercrap"
        })

    return app
