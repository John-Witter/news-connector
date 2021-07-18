import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../../store/weather'

const Weather = () => {
    const dispatch = useDispatch()
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [city, setCity] = useState('')


    useEffect(() => {
        const getLocationByIP = async () => {
            const res = await fetch('https://ipapi.co/json/')
            const data = await res.json()
            console.log('getLocationByIP data:', data)
            setLat(data.latitude)
            setLong(data.longitude)
            setCity(data.city)
        }

        getLocationByIP()
        dispatch(getWeather())
        // const getWeatherByCoordinates = async () => {
        //     // const apiKey = process.env.WEATHER_API
        //     // https://cors-anywhere.herokuapp.com/corsdemo
        //     try {
        //         const res = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)
        //         // console.log('getWeatherByCoordinates res:', res)
        //         const data = await res.json()
        //         // console.log('getWeatherByCoordinates data:', data)
        //     } catch (error) {                
        //         // console.log('err:', error)
        //     }
        // }
        // getWeatherByCoordinates()
    },[lat, long])

    // ipLocation('', function (err, myLocation) {
    //     console.dir(myLocation)
    // })

    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
    
    return (
        <div>
            {/* <h1>Long {long}</h1>
            <h1>Lat {lat}</h1>
            <h1>City {city}</h1> */}
        </div>
    )
}

export default Weather
