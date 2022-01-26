import React from 'react';
import PropTypes from 'prop-types';
import style from './message.module.css';

const Message = (props) => {
    const {author, content} = props;

    return (
        <div className={style.element}>
            <p className={style.author}>Auteur: {author}</p>
            <p className={style['content-message']}>{content}</p>
        </div>
    );
}

// valeur par défaut
// si auteur n'existe pas, il note "inconnu"
Message.defaultProps = {
    author: 'Inconnu'
}

// Check si le typage est bon
// Nécéssite d'installer 'prop-types' (ou bien on utilise typescript)
Message.propTypes = {
    author: PropTypes.string, // on attends un string
    content: PropTypes.string.isRequired
}

export default Message;