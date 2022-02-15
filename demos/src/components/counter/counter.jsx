import React, { useEffect, useState } from 'react';

/* DEMO 06 - LE CYCLE DE VIE */

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // Effet pour l'ajout et la mise à jour
        console.log('Effect start !')
        document.title = `Counter : ${count}`

        // Effet de nettoyage
        return () => {
            console.log('Effect clear :o')
        }
    })

    const handleUpCounter = () => {
        // Mise à jour du state -> re-render
        setCount(c => c + 1)
    }

    return(
        <>
            {console.log('Render')}
            <p>Valeur du compteur : {count}</p>
            <button onClick={handleUpCounter}>+1</button>
        </>
    )
}

export default Counter;