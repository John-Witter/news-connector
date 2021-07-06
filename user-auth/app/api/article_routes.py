from flask import Blueprint, jsonify, request
import requests, json
from app.models import db, Interest

article_routes = Blueprint('articles', __name__)

@article_routes.route('/', methods=['GET'])
def get_articles():
    res = requests.get(
        'https://newsapi.org/v2/everything?q=Apple&from=2021-06-26&sortBy=popularity&apiKey=13bc774f3bb545d8935600ca47e4cfcf')
    
    return res.json()