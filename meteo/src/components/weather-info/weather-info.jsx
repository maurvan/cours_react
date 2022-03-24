const WeatherInfo = ({name, temp, weather}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p><b>Weather:</b> {weather}</p>
            <p><b>Temperature:</b> {temp}</p>
        </div>
    )
}

export default WeatherInfo;