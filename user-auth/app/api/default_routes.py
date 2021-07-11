from flask import Blueprint
from app.models import Default

default_routes = Blueprint('default', __name__)

@default_routes.route('/')
def get_defaults():
    defaults = Default.query.all()
    return {"defaults": [item.to_dict() for item in defaults]}
    