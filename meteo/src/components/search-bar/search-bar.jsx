import axios from 'axios';
import { useState } from 'react';
import WeatherInfo from '../weather-info/weather-info';

const SearchBar = () => {
    const [error, setError] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const handleSearchWeather = () => {
        setError('')
        setWeatherData(null)

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=759678740ef5a492ae12f471ecef36a6&units=metric')
        .then(response => {
            setWeatherData({
                name: response.data.name,
                temp: response.data.main.temp,
                weather: response.data.weather.main,
                // TODO icon
            })
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            console.log(weatherData)
        })
    }

    return (
        <>
            <form>
                <input type="text" id="search" placeholder="Entrez une ville" />
                <button onClick={handleSearchWeather} type="submit">Rechercher</button>
            </form>
            {error ? (
                <h2>{error}</h2>
            ) : weatherData !== null && (
                < WeatherInfo {...weatherData} />
            )}
        </>
    )
}

export default SearchBar;