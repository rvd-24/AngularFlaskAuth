# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "https://angularfrontendeasyauth-trial.azurewebsites.net"}})

@app.route('/')
def home():
    return "Check out route /api/profile."

@app.route('/api/profile')
def get_profile():
    token = request.headers.get('X-MS-TOKEN-AAD-ACCESS-TOKEN')
    if not token:
        return jsonify({"error": "No token provided"}), 401

    try:
        # In a real app, you would validate the token here
        # For this example, we're just checking if it exists
        return jsonify({
            "name": "Fake User",
            "email": "fake@example.com",
            "token": token[:10] + "..." 
        })
    except Exception as e:
        return jsonify({"error": "Invalid token"}), 401

if __name__ == '__main__':
    app.run(debug=True)