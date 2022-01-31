import { useState } from 'react';
import style from './ex03.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Compteur = (props) => {
    // initialiser la valeur à 0
    const [total, setTotal] = useState(0)

    // Récuperation de la valeur du "step" dans les props
    const {step} = props

    // pour le plus
    const handlePlus = () => {
        setTotal(prevValeur => prevValeur + step);
    }

    // pour le reset
    const handleReset = () => {
        setTotal(0);
    }

    // Pour mettre le zero dans un style différent en utilisant la bibliothèque classnames
    const styleZero = classNames({
        [style.size] : true,
        [style.zero]: total === 0
    })

    // Rendu JSX du component
    return (
        <div className={style.divCompteur}>
            <p><b>Compteur:</b> <span className={styleZero}>{total}</span></p>
            <button onClick={handlePlus}>+ {step}</button> {/* Méthode dédiée */}
            <button onClick={() => setTotal(prevValeur => prevValeur - step)}>- {step}</button> {/* Fonction crée dans le JSX */}
            {(total !== 0) &&
            <button onClick={handleReset}>Remettre à zéro</button>
            }
        </div>
    )
}

Compteur.defaultProps = {
    step: 1
}

Compteur.propTypes = {
    step: PropTypes.number
}

export default Compteur;