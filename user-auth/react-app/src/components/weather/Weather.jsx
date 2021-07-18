import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../store/weather'

const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather)
    console.log('weather:', weather)
    // const city = weather.location

    if (weather.error) {
        console.log('weather:error:', weather.error['error'] == true)
    }

    useEffect(() => {
       if (weather.error) {
           return
       } else {
           dispatch(getWeather())
       }
    },[dispatch])

    
    return (
        <div>

        </div>
    )
}

export default Weather
