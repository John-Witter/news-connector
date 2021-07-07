from flask import Blueprint, jsonify, request
from flask_login import current_user
import requests, json
from app.models import db, Interest, Tag

article_routes = Blueprint('articles', __name__)

@article_routes.route('/', methods=['GET'])
def get_articles():
    # res = requests.get(
    #     'https://newsapi.org/v2/everything?q=Apple&from=2021-06-26&sortBy=popularity&apiKey=13bc774f3bb545d8935600ca47e4cfcf')
    
    # get  titles from user's interests
    interestsFromDB = Interest.query.filter_by(userId = current_user.id).all()
    interests = [title.to_dict()['title'] for title in interestsFromDB]

    # get titles from tags
    tagsFromDB = Tag.query.all()
    tags = [tag.to_dict()['title'] for tag in tagsFromDB]

    # merge titles from tags and interests into one list
    titles = tags + interests
    print('!!!!!!titles:', titles)

    api_key = '13bc774f3bb545d8935600ca47e4cfcf'

    url = ('https://newsapi.org/v2/everything?q=' + ' OR '.join(titles)
           ) + '&language=en' + '&apiKey=' + api_key + '&pageSize=100'

    res = requests.get(url)

    return res.json()
