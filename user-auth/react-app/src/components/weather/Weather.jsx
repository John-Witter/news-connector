import React, { useEffect, useState} from 'react'

const Weather = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    }, [lat, long])

    console.log('!!!!!!Lat', lat)
    console.log('!!!!!!Long', long)

    return (
        <div>
        </div>
    )
}

export default Weather
