import { useDispatch } from "react-redux";
import { reset } from '../../store/actions/counter-action';

const BtnCounterReset = () => {

    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch(reset())
    }

    return (
        <button onClick={handleReset}>Reset</button>
    )
}

export default BtnCounterReset;