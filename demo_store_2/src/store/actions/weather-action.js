import axios from "axios";

/* LES TYPES D'ACTIONS POSSIBLES */
export const WEATHER_LOADING = 'weather/loading';
export const WEATHER_RESULT = 'weather/result'; // pour transmettre au store les resultats
export const WEATHER_ERROR = 'weather/error';

/* METHODES POUR CREER LES OBJETS ACTION */
export const loadingWeather = () => ({
    type: WEATHER_LOADING
})

export const errorWeather = (message) => ({
    type: WEATHER_ERROR,
    payload: message
})

export const resultWeather = (result) => ({
    type: WEATHER_RESULT,
    payload: {
        name: result.name,
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    }
})

// Methode pour rechercher la météo via axios (nécéssite redux-thunk)
// => soude les 3 actions
export const searchWeather = (city) => {

    // Envoi d'une fonction qui sera traitée via redux-thunk
    return (dispatch) => {
        // La variable "dispatch" permet à redux-thunk de déclencher des actions

        // Test de garde
        if(!city) {
            dispatch(errorWeather('Ville non définie !'))
            return
        }

        // Déclenche l'action 'LOADING'
        dispatch(loadingWeather())

        // On décompose l'url: http://api.openweathermap.org/data/2.5/weather?q=Bruxelles&appid=c3fa448b20d4333b499f552522c429d3&units=metric&lang=fr
        // Envoi de la requete AJAX
        axios.get('http://api.openweathermap.org/data/2.5/weather', { 
            params: {
                q: city,
                appid: 'c3fa448b20d4333b499f552522c429d3',
                units: 'metric',
                lang: 'fr'
            }
        }).then(response => {
            // Déclenche l'action 'RESULT'
            dispatch(resultWeather(response.data))
        }).catch(error => {
            const message = (error.response.status === 404) ? 'Ville non trouvée' : 'Un problème est survenu'

            // Déclenche l'action 'ERROR'
            dispatch(errorWeather(message))
        })
    }
}
