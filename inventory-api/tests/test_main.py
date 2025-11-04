from src.main import app

def test_health():
    client = app.test_client()
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json["status"] == "ok"

def test_get_items():
    client = app.test_client()
    res = client.get("/items")
    assert res.status_code == 200
    assert isinstance(res.json, list)
