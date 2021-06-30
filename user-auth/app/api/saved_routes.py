from flask import Blueprint
from app.models import db, Saved
from app.forms import SavedForm

saved_routes = Blueprint('saved', __name__)

#return all tags that a given user has selected
@saved_routes.route('/<int:userId>', methods=["GET"])
def get_saved(userId):
    saved = Saved.query.filter_by(userId == userId).all()

    return {"saved":[article.to_dict() for article in saved]}

# adds a tag to the current user's selected tags
@saved_routes.route('<int:userId', methods=["POST"])    
def post_to_saved(userId):
    pass

# returns single saved article for the given article id
@saved_routes.route('/articles/<int:id>', methods=["GET"])
def get_saved(id):
    saved = Saved.query.filter_by(id == id).first()

    return {"saved": saved.to_dict()}

# deletes an article from the user's saved articles list
@saved_routes.route('/articles/<int:id>', methods=['DELETE'])
def delete_from_saved(id):
        article = Saved.query.filter_by(id == id).first()

        db.session.delete(article)
        db.session.commit()

        return '', 200