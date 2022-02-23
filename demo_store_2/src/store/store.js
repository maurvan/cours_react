import { combineReducers, createStore } from "redux";

// Importation des reducers qu'on a généré
import { ProductReducer } from "./reducers/product-reducer";

// On crée une variable pour réunir les différents reducers
const reducer = combineReducers({
    productCategory: ProductReducer 
})

// Creation du store
const store = createStore(reducer)

// Exporter le store
export default store