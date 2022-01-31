import React, {useState} from 'react';

const MultiNumber = (props) => {

    // Utilisation du "useState" (Hook d'état) pour créer l'état "total"
    const [total, setTotal] = useState(1);

    const handleMulti2 = () => {
        console.log('x2');
        setTotal(t => t * 2);
    }

    const handleReset = () => {
        console.log('Reset');
        // Modification de l'état "total", affectation d'une valeur
        setTotal(1);
    }

    return (
        <div>
            <p>La valeur actuelle: {total}</p>
            <button onClick={handleMulti2}>x2</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default MultiNumber;