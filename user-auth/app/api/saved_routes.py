from flask import Blueprint, request
from app.models import db, Saved
from app.forms import SavedForm

saved_routes = Blueprint('saved', __name__)

#return all articles that a given user has saved
@saved_routes.route('/<int:userId>', methods=["GET"])
def get_saved(userId):
    saved = Saved.query.filter_by(userId == userId).all()

    return {"saved":[article.to_dict() for article in saved]}

# adds an article to the current user's saved articles
@saved_routes.route('<int:userId', methods=["POST"])    
def post_to_saved(userId):
    form = SavedForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submi():
        new_article = SavedForm(
            userId = form.data['userId'],
            itemURL = form.data['itemURL']
        )
        db.session.add(new_article)
        db.session.commit()

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
