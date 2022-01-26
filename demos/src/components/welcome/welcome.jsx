import React from 'react';

const Welcome = (props) => {
    const {name} = props;
    // equivalent à const name = props.name

    return (
        <div>
            <h1>Bienvenue {name}</h1>
            <h3>Ceci est un projet React</h3>
        </div>
    );
}

// Exporter le composant Welcome
export default Welcome;