import React from 'react';

const PokemonInfo = ({name, legendary, color, habitat, captureRate, flavorText}) => {
    return (
        <div>
            <h2>{name}</h2>
            {legendary && (
                <p>Pokémon Légendaire!</p>
            )}

            <p><b>Color:</b> {color}</p>
            <p><b>Habitat:</b> {habitat ?? 'Inconnu'}</p>
            <p><b>Capture Rate:</b> {captureRate}</p>

            <p><b>Text:</b> {flavorText}</p>
        </div>
    )
}

export default PokemonInfo;