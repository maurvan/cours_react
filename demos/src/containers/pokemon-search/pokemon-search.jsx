import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../../components/loading/loading';
import PokemonInfo from '../../components/pokemon-info/pokemon-info';

/* DEMO 08 - AJAX */

const PokemonSearch = () => {
    // Initialisation des variables d'etat pour la requête
    const [chargement, setChargement] = useState(false)
    const [error, setError] = useState('')
    const [pokemonData, setPokemonData] = useState(null)

    // Méthode qui lance la requete AJAX
    const handleSearchPokemon = () => {
        // Remise a zero du state
        setChargement(true)
        setError('')
        setPokemonData(null)

        // Envoi de la requete AJAX
        axios.get('https://pokeapi.co/api/v2/pokemon-species/25')
        .then(response => {
            setPokemonData({
                name: response.data.name,
                legendary: response.data.is_legendary,
                color: response.data.color.name,
                habitat: response.data.habitat?.name,
                captureRate: response.data.capture_rate,
                // flavorText: TODO
            })
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setChargement(false)
        })
    }

    return (
        <div>
            <button onClick={handleSearchPokemon}>Rechercher un Pokemon</button>
            {chargement ? (
                < Loading />
            ) : error ? (
                <h2>{error}</h2>
            ) : pokemonData !== null && (
                < PokemonInfo {...pokemonData} />
            )}
        </div>
    )
}

export default PokemonSearch;