// constants
const GET_WEATHER = 'weather/GET_WEATHER'

// actions
const loadWeather = (weather) => ({
    type: GET_WEATHER,
    weather
})

// thunks
export const getWeather = () => async (dispatch) => {
    const res = await fetch('/api/weather/')

    if (res.ok) {
        const data = await res.json()
        console.log('getWeather data:', data)
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