/* contient les parametres du store */

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";

// On combine les reducers ensemble
const reducer = combineReducers({
    counter: counterReducer
})

// On crée le store
export default createStore(reducer)