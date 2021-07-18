import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../store/weather'

const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather)
    console.log('weather:', weather)
    // const city = weather.location

    
    useEffect(() => {
        if (weather.error) {
            return
        } else {
            dispatch(getWeather())
        }
    },[dispatch])
    
    if (weather.error) {
        console.log('weather:error:', weather.error['error'] == true)
        return null
    }
    
    else return (
        <div>
            Weather!
        </div>
    )
}

export default Weather
