import { useState } from "react";
import style from './ex04.module.css';

// Création d'une pseudo-enum
const operationEnum = {
    plus: '+',
    min: '-',
    fois: '*',
    div: '/'
}

const Ex04 = (props) => {

    // hook d'etat
    const [nb1, setNb1] = useState('')
    const [operateur, setOperateur] = useState(operationEnum.plus)
    const [nb2, setNb2] = useState('')
    const [total, setTotal] = useState('')

    // bouton submit
    const handleSubmit = (e) => {
        e.preventDefault()

        const val1 = parseFloat(nb1)
        const val2 = parseFloat(nb2)

        if(isNaN(val1) || isNaN(val2)) {
            setTotal('Fool of a Took!')
            return
        }

        switch (operateur) {
            case operationEnum.plus:
                setTotal(val1 + val2)
                break;
            case operationEnum.min:
                setTotal(val1 - val2)
                break;
            case operationEnum.fois:
                setTotal(val1 * val2)
                break;
            case operationEnum.div:
                if (val2 !== 0) {
                    setTotal(val1 / val2)
                }
                else {
                    setTotal("Division par zero!")
                }
                break;
            default:
                setTotal("Veuillez selectionner une opération")
                break;
        }
    }

    const handleNumberInput = (e, setStateValue) => {
        // pour être sur que l'utilisatauer rentre un nombre
        const regexNumber = /^[0-9]+([\.,][0-9]*)?$/
        const value = e.target.value

        if(value === '' || regexNumber.test(value)) {
            setStateValue(value.replace(',', '.'))
        }
    }

    return (
        <div className={style.container}>
            <form className={style.formCalc} onSubmit={handleSubmit} >
                <label htmlFor="nb1">Nb1</label>
                <input type="text" id="nb1" onChange={(e) => handleNumberInput(e, setNb1)} value={nb1} />
                <label htmlFor="operateur">Opération</label>
                <select id="operateur" onChange={(e) => setOperateur(e.target.value)} value={operateur}>
                    <option value={operationEnum.plus}>+</option>
                    <option value={operationEnum.min}>-</option>
                    <option value={operationEnum.fois}>x</option>
                    <option value={operationEnum.div}>/</option>
                </select>
                <label htmlFor="nb2">Nb2</label>
                <input type="text" id="nb2" onChange={(e) => handleNumberInput(e, setNb2)} value={nb2} />
                <button type="submit">Calculer</button>
                <input type="text" value={total} readOnly />
            </form>
        </div>
    )
}

export default Ex04;