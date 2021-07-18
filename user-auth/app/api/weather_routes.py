from flask import Blueprint
import requests
import os

weather_routes = Blueprint('weather', __name__)

@weather_routes.route('/', methods=['GET'])
def get_weather():
    print('!!!!!!INSIDE GET_WEATHER')
    api_key = os.environ.get('WEATHER_API')

    # https://ipapi.co/api/?python#location-of-clients-ip
    try:
        response = requests.get('https://ipapi.co/json/').json()

        lat = response['latitude']
        lon = response['longitude']
        url = f'http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={api_key}&units=imperial'

        print('!!!!!!api_key:', api_key)
        print('!!!!!!lat:', lat)
        print('!!!!!!lon:', lon)
        print('!!!!!!url:', url)

        res = requests.get(url)
        return {'weather': res.json(), 'location': response}

    except:
        print('!!!!!!not response:', response['error'])
        return {'error': response}
