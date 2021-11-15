// constants
const GET_WEATHER = "weather/GET_WEATHER";

// actions
const loadWeather = (weather) => ({
    type: GET_WEATHER,
    weather,
});

// thunks
export const getWeather = () => async (dispatch) => {
    try {
        const location = await fetch("https://ipapi.co/json/");
        const locData = await location.json();

        const { city, latitude, longitude } = locData;
        const loc = city + "+" + latitude + "+" + longitude;
        const res = await fetch(`/api/weather/${loc}`);

        if (res.ok) {
            const data = await res.json();
            dispatch(loadWeather(data));
        }
    } catch (error) {
        // if ip location is not found
        // set location to Miami

        const defaultLocation = 'Miami' + "+" + 25.7381 + "+" + -80.312;
        const defaultWeatherRes = await fetch(
            `/api/weather/${defaultLocation}`
        );

        const defaultWeather = await defaultWeatherRes.json();

        dispatch(loadWeather(defaultWeather));
    }
};

// reducer
export default function WeatherReducer(state = {}, action) {
    switch (action.type) {
        case GET_WEATHER:
            return action.weather;
        default:
            return state;
    }
}
