import React from 'react';
import style from './person.module.css';

const Person = ({firstname, lastname, gender}) => {

    const title = gender === 'F' ? 'Madame' : (gender === 'M') ? 'Monsieur' : ''; // On peut imbriquer des ternaires

    const color = gender === 'F' ? style.colorFemale : (gender === 'M') ? style.colorMale : style.colorUndefined;

    return (
        <div>
            <p><span className={color}>{title}</span> {firstname} {lastname.toUpperCase()}</p>
        </div>
    )
}

export default Person;