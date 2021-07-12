from flask import Blueprint
from app.models import HomeData

default_routes = Blueprint('homeData', __name__)

@default_routes.route('/')
def get_defaults():
    defaults = HomeData.query.all()
    return {"defaults": [item.to_dict() for item in defaults]}
    