from re import T
from flask import Blueprint, jsonify, request
from flask_login import current_user
import requests, json, random, os
from app.models import db, Interest, Tag

article_routes = Blueprint('articles', __name__)

@article_routes.route('/', methods=['GET'])
def get_articles():
    # res = requests.get(
    #     'https://newsapi.org/v2/everything?q=Apple&from=2021-06-26&sortBy=popularity&apiKey=13bc774f3bb545d8935600ca47e4cfcf')
    
    # get  titles from user's interests
    interestsFromDB = Interest.query.filter_by(userId = current_user.id).all()
    interests = [title.to_dict()['title'] for title in interestsFromDB]
    random.shuffle(interests)

    # get titles from tags
    tagsFromDB = Tag.query.all()
    tags = [tag.to_dict()['title'] for tag in tagsFromDB]
    random.shuffle(tags)

    # merge titles from tags and interests into one list
    titles = interests + tags
    random.shuffle(titles)

    # 100 requests per day available
    news_api_key = os.environ.get('NEWS_API')
    
    news_url = ('https://newsapi.org/v2/everything?q=' + ' OR '.join(titles)
           ) + '&language=en' + '&apiKey=' + news_api_key + '&pageSize=100'

    news_res = requests.get(news_url)    
    articles = news_res.json()['articles']
    random.shuffle(articles)

    # get headlines
    headline_url = 'https://newsapi.org/v2/top-headlines?country=us' + '&language=en' + '&apiKey=' + news_api_key + '&pageSize=100'
    headline_res = requests.get(headline_url)
    headlines = headline_res.json()['articles']

    # Note: All API Keys start as beta keys, which are rate limited(42 reads per hour and 1000 searches/API calls per day.)
    giphy_api_key = os.environ.get('GIPHY_API')

    gifs = []
    for i in range(len(interests)):
        giphy_url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphy_api_key + '&q=' + interests[i] + '&limit=5&offset=0&rating=g&lang=en'
        giphy_res = requests.get(giphy_url)
        gifs.append(giphy_res.json())
            

    articles = {'articles': articles}
    return {'gifs': gifs, 'articles': articles, 'headlines': headlines}
