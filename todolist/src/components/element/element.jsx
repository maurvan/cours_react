import style from './element.module.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Element = (props) => {
    // Récuperation des données à afficher
    const { id, nom, desc, priorite, complete } = props;

    // Récuperation des events à envoyer
    const { onFinished, onDelete } = props;

    return(
        <div className={ cx(style.element, {[style.done]: (complete === true)}) }>
            <div className={style.textes}>
                <p><b>{nom}</b> {(priorite === 'urgent') && (<span>(Urgent)</span>)}</p>
                {(desc !== '') && (<p><i>{desc}</i></p>)}
            </div>
            <div className={style.boutons}>
                <button onClick={() => onFinished(id)} disabled={(complete === true)}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </div>
    )
}

Element.defaultProps = {
    onFinished: () => {},
    onDelete: () => {}
}

Element.propTypes = {
    id: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    desc: PropTypes.string,
    priorite: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    onFinished: PropTypes.func,
    onDelete: PropTypes.func
}

export default Element;