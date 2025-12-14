from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # In a real application, you would:
        # 1. Send an email
        # 2. Save to database
        # 3. Log the message
        
        print(f"Contact form submission received:")
        print(f"Name: {data['name']}")
        print(f"Email: {data['email']}")
        print(f"Message: {data['message']}")
        
        return jsonify({
            'success': True,
            'message': 'Your message has been sent successfully!'
        }), 200
        
    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'An error occurred while processing your message.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'service': 'Portfolio Backend API'
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')