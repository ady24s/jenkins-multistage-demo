from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

inventory = [
    {"id": 1, "name": "Widget", "qty": 10},
    {"id": 2, "name": "Gadget", "qty": 5}
]

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"}), 200

@app.route("/api/items", methods=["GET"])
def get_items():
    return jsonify(inventory), 200

@app.route("/api/items", methods=["POST"])
def add_item():
    data = request.get_json()
    if not data or "name" not in data:
        return jsonify({"error": "Missing 'name' field"}), 400
    
    new_id = max((i["id"] for i in inventory), default=0) + 1
    item = {
        "id": new_id,
        "name": data["name"],
        "qty": data.get("qty", 0)
    }
    inventory.append(item)
    return jsonify(item), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
