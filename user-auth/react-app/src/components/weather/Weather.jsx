import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../store/weather'
import getDays from './getDays'

const Weather = () => {
    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather)
    const [week, setWeek] = useState(getDays())

    //set these vars if weather successfully fetched
    const [city, setCity] = useState(weather)
    const [currentTemp, setCurrentTemp] = useState(0)
    const [currentTempIcon, setCurrentTempIcon] = useState('')
    const [todayHigh, setTodayHigh] = useState(0)
    const [todayLow, setTodayLow] = useState(0)
    const [todayDescription, setTodayDescription] = useState('')
    
    const [day1High, setday1High] = useState(0)
    const [day1Low, setday1Low] = useState(0)
    const [day1Name, setday1Name] = useState('')

    const [day2High, setday2High] = useState(0)
    const [day2Low, setday2Low] = useState(0)
    const [day2Name, setday2Name] = useState('')
    
    const [day3High, setday3High] = useState(0)
    const [day3Low, setday3Low] = useState(0)
    const [day3Name, setday3Name] = useState('')
    
    const [day4High, setday4High] = useState(0)
    const [day4Low, setday4Low] = useState(0)
    const [day4Name, setday4Name] = useState('')
    
    const [day5High, setday5High] = useState(0)
    const [day5Low, setday5Low] = useState(0)
    const [day5Name, setday5Name] = useState('')
    
    const [day6High, setday6High] = useState(0)
    const [day6Low, setday6Low] = useState(0)
    const [day6Name, setday6Name] = useState('')
    // console.log('city:', city)
    
    
    useEffect(() => {
        
        // setCity(weather.location.)
        
        if (Object.values(weather).length > 0 && !weather.error) {
            console.log('weather:', weather)
            setCity(weather.location.city)
            setCurrentTemp(weather.weather.current.temp)
            setCurrentTempIcon(weather.weather.current.weather[0].icon)
            setTodayHigh(weather.weather.daily[0].temp.max)
            setTodayLow(weather.weather.daily[0].temp.min)
            setTodayDescription(weather.weather.current.weather[0].description)

            setday1High(weather.weather.daily[1].temp.max)
            setday1Low(weather.weather.daily[1].temp.min)
            setday1Name(week[1])

            setday2High(weather.weather.daily[2].temp.max)
            setday2Low(weather.weather.daily[2].temp.min)
            setday2Name(week[2])

            setday3High(weather.weather.daily[3].temp.max)
            setday3Low(weather.weather.daily[3].temp.min)
            setday3Name(week[3])
            
            setday4High(weather.weather.daily[4].temp.max)
            setday4Low(weather.weather.daily[4].temp.min)
            setday4Name(week[4])
            
            setday5High(weather.weather.daily[5].temp.max)
            setday5Low(weather.weather.daily[5].temp.min)
            setday5Name(week[5])
            
            setday6High(weather.weather.daily[6].temp.max)
            setday6Low(weather.weather.daily[6].temp.min)
            setday6Name(week[6])
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
