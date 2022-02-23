import { useDispatch } from "react-redux";
import { increment, decrement } from './../../store/actions/counter-action';

const CounterAction = (props) => {
    const {step} = props

    // Recuperation de la methode pour interagir avec le dispatcher
    const dispatch = useDispatch()

    const handleUp = () => {
        // Envoi de l'objet d'action "increment"
        dispatch(increment(step))
    }

    const handleDown = () => {
        dispatch(decrement(step))
    }

    return (
        <div>
            <button onClick={handleUp}>+{step}</button>
            {' '}
            <button onClick={handleDown}>-{step}</button>
        </div>
    )
}

CounterAction.defaultProps = {
    step: 1
}

export default CounterAction;