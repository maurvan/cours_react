import React, { useState } from 'react';
import style from './reservoir.module.css';

/* l'envoi d'event vers un composant parent est possible en utilisant un callback à l'aide des props */
/* App.js est le parent, reservoir.jsx est l'enfant */

const Reservoir = (props) => {
    const { max } = props // données descendantes, props "data"
    const { onReservoirPlein, onReservoirVide } = props // données qui vont vers le parent, props "event"

    const [niveau, setNiveau] = useState(0)

    const handleUp = () => {
        if(niveau < max) {
            setNiveau(n => n + 1)
        }
        else {
            onReservoirPlein() // le reservoir est plein, je préviens le parent
        }
    }

    const handleDown = () => {
        if(niveau > 0) {
            setNiveau(n => n - 1)
        }
        else {
            onReservoirVide() // le reservoir est vide, je préviens le parent
        }
    }

    return (
        <div className={style.reservoir}>
            <p>Le niveau du reservoir est de {niveau} sur {max} L</p>
            <button onClick={handleUp}>Ajouter 1L</button>
            <button onClick={handleDown}>Retirer 1L</button>
        </div>
    )
}

// permet d'avoir des elements optionnels (si on ne les utilise pas), c'est une protection
Reservoir.defaultProps = {
    max: 10,
    onReservoirPlein: () => {}, 
    onReservoirVide: () => {} // loop
}

export default Reservoir;