from flask import Blueprint, jsonify, request
from flask_login import current_user
import requests, json
from app.models import db, Interest, Tag

article_routes = Blueprint('articles', __name__)

@article_routes.route('/', methods=['GET'])
def get_articles():
    res = requests.get(
        'https://newsapi.org/v2/everything?q=Apple&from=2021-06-26&sortBy=popularity&apiKey=13bc774f3bb545d8935600ca47e4cfcf')
    
    interestsFromDB = Interest.query.filter_by(userId = current_user.id).all()
    interests = [titles.to_dict() for titles in interestsFromDB]
    print (interests)

    tagsFromDB = Tag.query.all()
    tags = [tags.to_dict() for tags in tagsFromDB]
    print (tags)

    return ''
