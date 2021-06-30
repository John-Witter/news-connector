from flask import Blueprint
from app.models import db, Saved
from app.forms import SavedForm

saved_routes = Blueprint('saved', __name__)

@saved_routes.route('/<int:userId>', methods=["GET"])
def get_saved(userId):
    saved = Saved.query.filter_by(userId == userId).all()

    return {"saved":[article.to_dict() for article in saved]}

@saved_routes.route('/articles/<int:id>', methods=["GET"])
def get_saved(id):
    saved = Saved.query.filter_by(id == id).first()

    return {"saved": saved.to_dict()}