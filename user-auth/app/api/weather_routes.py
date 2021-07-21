from flask import Blueprint
import requests
import os

weather_routes = Blueprint('weather', __name__)


@weather_routes.route('/<string:loc>', methods=['GET'])
def get_weather(loc):
    api_key = os.environ.get('WEATHER_API')

    # https://ipapi.co/api/?python#location-of-clients-ip
    try:
        # response = requests.get('https://ipapi.co/json/').json()
        # lat = response['latitude']
        # lon = response['longitude']
        strToArr = loc.split('+')
        url = f'http://api.openweathermap.org/data/2.5/onecall?lat={strToArr[1]}&lon={strToArr[2]}&appid={api_key}&units=imperial'

        res = requests.get(url)

        return {'weather': res.json(), 'location': strToArr}

    except:
        return {'error': res.json()}
