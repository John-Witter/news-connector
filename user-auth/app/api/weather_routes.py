from flask import Blueprint
import requests
import os

weather_routes = Blueprint('weather', __name__)


@weather_routes.route('/', methods=['GET'])
def get_weather():
    api_key = os.environ.get('WEATHER_API')

    # https://ipapi.co/api/?python#location-of-clients-ip
    try:
        response = requests.get('https://ipapi.co/json/').json()
        lat = response['latitude']
        lon = response['longitude']
        url = f'http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={api_key}&units=imperial'

        res = requests.get(url)
        return {'weather': res.json(), 'location': response}

    except:
        return {'error': response}
