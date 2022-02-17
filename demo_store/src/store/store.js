/* contient les parametres du store */

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";

const reducer = combineReducers({
    counter: counterReducer
})

export default createStore(reducer)