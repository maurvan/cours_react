import { useDispatch } from "react-redux";
import { increment, decrement, reset } from './../../store/actions/counter-action';

const CounterAction = () => {

    const dispatch = useDispatch()

    const handleUp = () => {
        dispatch(increment(1))
    }

    const handleDown = () => {
        dispatch(decrement(1))
    }

    return (
        <div>
            <button onClick={handleUp}>+</button>
            {' '}
            <button onClick={handleDown}>-</button>
            {' '}
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterAction;