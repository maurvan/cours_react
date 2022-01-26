import React from 'react';

const FruitList = () => {

    // Données (Format JS)
    const fruits = [
        "Pomme",
        "Poire",
        "Cerise",
        "Fraise",
        "Banane"
    ];

    // Conversion de données vers des composants React
    const fruitsJSX = fruits.map( fruit => <li key={fruit}>{fruit}</li> )

    return (
        <>
            <h2>List de fruits</h2>
            <ul>
                {fruitsJSX}
            </ul>
        </>
    )
}

export default FruitList;