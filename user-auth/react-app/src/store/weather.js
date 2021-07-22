// constants
const GET_WEATHER = 'weather/GET_WEATHER'

// actions
const loadWeather = (weather) => ({
    type: GET_WEATHER,
    weather
})

// thunks
export const getWeather = () => async (dispatch) => {
    const location = await fetch('https://ipapi.co/json/')
    const locData = await location.json() 

    const {city, latitude, longitude} = locData
    const loc = city + '+' + latitude + '+' + longitude
    const res = await fetch(`/api/weather/${loc}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(loadWeather(data))
    } 
}

// reducer
export default function WeatherReducer (state={}, action) {    
    switch(action.type) {
        case GET_WEATHER:
            return action.weather
        default:
            return state
    }
}