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
    const [iconImage, setIconImage] = useState('')
    const [todayHigh, setTodayHigh] = useState(0)
    const [todayLow, setTodayLow] = useState(0)
    const [todayDescription, setTodayDescription] = useState('')
    
    const [day1High, setday1High] = useState(0)
    const [day1Low, setday1Low] = useState(0)
    const [day1Name, setday1Name] = useState('')
    const [day1TempIcon, setDay1TempIcon] = useState('')

    const [day2High, setday2High] = useState(0)
    const [day2Low, setday2Low] = useState(0)
    const [day2Name, setday2Name] = useState('')
    const [day2TempIcon, setDay2TempIcon] = useState('')
    
    const [day3High, setday3High] = useState(0)
    const [day3Low, setday3Low] = useState(0)
    const [day3Name, setday3Name] = useState('')
    const [day3TempIcon, setDay3TempIcon] = useState('')
    
    const [day4High, setday4High] = useState(0)
    const [day4Low, setday4Low] = useState(0)
    const [day4Name, setday4Name] = useState('')
    const [day4TempIcon, setDay4TempIcon] = useState('')
    
    const [day5High, setday5High] = useState(0)
    const [day5Low, setday5Low] = useState(0)
    const [day5Name, setday5Name] = useState('')
    const [day5TempIcon, setDay5TempIcon] = useState('')

    const [day6High, setday6High] = useState(0)
    const [day6Low, setday6Low] = useState(0)
    const [day6Name, setday6Name] = useState('')
    const [day6TempIcon, setDay6TempIcon] = useState('')    
    

    useEffect(() => {
    
        const getIconImage = (currentTempIcon) => {
            const iconURL = `http://openweathermap.org/img/wn/${currentTempIcon}@2x.png`
            
            setIconImage(iconURL)
            console.log('iconImage', iconImage)

        }
        
        //if weather is loaded, set the state values
        if (Object.values(weather).length > 0 && !weather.error) {
            console.log('weather:', weather)
            setCity(weather.location.city)

            setCurrentTemp(Math.floor(weather.weather.current.temp))
            setCurrentTempIcon(weather.weather.current.weather[0].icon)

            getIconImage(weather.weather.current.weather[0].icon)
            
            setTodayHigh(Math.floor(weather.weather.daily[0].temp.max))
            setTodayLow(Math.floor(weather.weather.daily[0].temp.min))
            setTodayDescription(weather.weather.current.weather[0].description)

            setday1High(Math.floor(weather.weather.daily[1].temp.max))
            setday1Low(Math.floor(weather.weather.daily[1].temp.min))
            setday1Name(week[1])
            const day1Icon = weather.weather.daily[1].weather[0].icon
            setDay1TempIcon(`http://openweathermap.org/img/wn/${day1Icon}.png`)

            setday2High(Math.floor(weather.weather.daily[2].temp.max))
            setday2Low(Math.floor(weather.weather.daily[2].temp.min))
            setday2Name(week[2])
            const day2Icon = weather.weather.daily[2].weather[0].icon
            setDay2TempIcon(`http://openweathermap.org/img/wn/${day2Icon}.png`)

            setday3High(Math.floor(weather.weather.daily[3].temp.max))
            setday3Low(Math.floor(weather.weather.daily[3].temp.min))
            setday3Name(week[3])
            const day3Icon = weather.weather.daily[3].weather[0].icon
            setDay3TempIcon(`http://openweathermap.org/img/wn/${day3Icon}.png`)
            
            setday4High(Math.floor(weather.weather.daily[4].temp.max))
            setday4Low(Math.floor(weather.weather.daily[4].temp.min))
            setday4Name(week[4])
            const day4Icon = weather.weather.daily[4].weather[0].icon
            console.log('day4Icon:', day4Icon)
            setDay4TempIcon(`http://openweathermap.org/img/wn/${day4Icon}.png`)
            
            setday5High(Math.floor(weather.weather.daily[5].temp.max))
            setday5Low(Math.floor(weather.weather.daily[5].temp.min))
            setday5Name(week[5])
            const day5Icon = weather.weather.daily[5].weather[0].icon
            setDay5TempIcon(`http://openweathermap.org/img/wn/${day5Icon}.png`)
            
            setday6High(Math.floor(weather.weather.daily[6].temp.max))
            setday6Low(Math.floor(weather.weather.daily[6].temp.min))
            setday6Name(week[6])
            const day6Icon = weather.weather.daily[6].weather[0].icon
            setDay6TempIcon(`http://openweathermap.org/img/wn/${day6Icon}.png`)
        }
        else dispatch(getWeather())
        
    }, [dispatch, weather])
    
    
    if (weather.error) {
        console.log('weather:error:', weather.error['error'] == true)
        return null
    } else {


        return (
            <div>                
                {weather.weather && (
                    <div>
                        {console.log('!!!!!!currentTemp:', currentTemp)}
                        {console.log('!!!!!!iconImage:', iconImage)}
                        <p>{todayDescription}</p>
                        <img src={iconImage} alt="f" />
                        <p>{currentTemp}</p>
                    </div>
                )}
                
            </div>
        )
    }
}
export default Weather
