import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';

// Importation des reducers qu'on a généré
import { productReducer } from "./reducers/product-reducer";
import { weatherReducer } from "./reducers/weather-reducer";

// On crée une variable pour réunir les différents reducers
const reducer = combineReducers({
    productCategory: productReducer,
    weatherCategory: weatherReducer
});

// Creation du store + Ajout du middleware "redux-thunk"
const store = createStore(reducer, applyMiddleware(reduxThunk));

// Exporter le store
export default store;