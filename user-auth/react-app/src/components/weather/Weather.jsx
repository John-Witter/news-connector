import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../store/weather'
import getDays from './getDays'

const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather)
    const [week, setWeek] = useState(getDays())
    const [ready, setReady] = useState(false)
    //set these vars if weather successfully fetched
    const [city, setCity] = useState(weather)
    const [currentTemp, setCurrentTemp] = useState(0)
    const [currentTempIcon, setCurrentTempIcon] = useState('')
    // console.log('city:', city)
    
    
    useEffect(() => {
        
        // setCity(weather.location.)
        
        if (Object.values(weather).length > 0) {
            console.log('weather:', weather)
            setCity(weather.location.city)
        }
        else dispatch(getWeather())
        
    }, [dispatch, weather])
    
    
    if (weather.error) {
        console.log('weather:error:', weather.error['error'] == true)
        return null
    } else {


        return (
            <div>
                {/* {Object.values(weather).length > 0 && setWeatherValues()} */}
                Weather!
            </div>
        )
    }
}
export default Weather
