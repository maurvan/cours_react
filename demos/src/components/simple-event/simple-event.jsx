import React from 'react';

const SimpleEvent = () => {

    const handleClickButton = (event) => {
        console.log(event);
        console.log("Coucou Manon");
    }

    const handleTextChange = (event) => {
        console.log(event.target.value);
    }

    return (<>
        <button onClick={handleClickButton}>Click here !!!!</button>
        <input onKeyUp={handleTextChange} type="text" />
    </>);
}

export default SimpleEvent;