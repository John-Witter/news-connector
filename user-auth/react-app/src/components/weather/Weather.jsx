import React, { useEffect, useState} from 'react'

const Weather = () => {
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [city, setCity] = useState('')

    const getLocationByIP = async () => {
        const res = await fetch('https://ipapi.co/json/')
        const data = await res.json()
        console.log('getLocationByIP data:', data)
        setLat(data.latitude)
        setLong(data.longitude)
        setCity(data.city)
    }

    getLocationByIP()

    // ipLocation('', function (err, myLocation) {
    //     console.dir(myLocation)
    // })

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
    
    return (
        <div>
            <h1>Long {long}</h1>
            <h1>Lat {lat}</h1>
            <h1>City {city}</h1>
        </div>
    )
}

export default Weather
