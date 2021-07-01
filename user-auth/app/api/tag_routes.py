from flask import Blueprint
from app.models import db, Tag
from app.forms import TagForm

tag_routes = Blueprint('tags', __name__)


# return all tags in the db
@tag_routes.route('/', methods=["GET"])
def get_tags():
    db_tags = Tag.query.all()
    return {"tags": [tags.to_dict() for tags in db_tags]}