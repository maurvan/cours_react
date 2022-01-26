import PropTypes from 'prop-types';
import pikachu from './pikachu.jpg';
import style from './ex01.module.css'

const Ex01 = ({nom, age}) => { // Déstructuring directement dans le paramètre
    // -> On ne récupère que le nom et l'age défini dans les props

    return (
        <div className={style.container01} >
            <h1>Bienvenue {nom} sur l'application React!</h1>
            <p>Vous avez {age} ans!</p>
            <img src={pikachu} alt="pikachu" className={style.logo} />
        </div>
    );
}

Ex01.defaultProps = {
    age: 18
}

Ex01.propTypes = {
    nom: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Ex01;