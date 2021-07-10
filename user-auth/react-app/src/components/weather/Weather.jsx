import React, { useEffect, useState} from 'react'

const Weather = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])

    ipLocation('', function (err, myLocation) {
        console.dir(myLocation)
    })

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
    
    return (
        <div>
            <h1>Long {long}</h1>
            <h1>Lat {lat}</h1>
        </div>
    )
}

export default Weather
