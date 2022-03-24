// Le composant obtient via les props le nom, la temperature, la description et l'icone
const WeatherDisplay = ({name, temp, desc, icon}) => (
    <div>
        <p>Météo de la région de {name}</p>
        <p>Temperature: {temp} °C</p>
        <img src={icon} alt={desc} />
    </div>
)

export default WeatherDisplay;