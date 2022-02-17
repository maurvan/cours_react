/* Le réducer -> récupère les actions et les résout */

import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET} from './../actions/counter-action';

// Définir l'etat initial
const initialState = {
    count: 0
}

// Création de la méthode "reducer" (methode d'accumulation du state et de l'action)
export const counterReducer = (state = initialState, action) => { // la premiere fois il va utiliser l'initialState, ensuite il récupère le State
    // Définition d'un switch avec la résolution des actions
    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state, // permet de s'assurer qu'on ne perds aucune valeur de state
                count: state.count + action.payload
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        case COUNTER_RESET:
            return {
                ...state,
                count: 0 // ou "initialState.count"
            }
        default:
            return state; // TOUJOURS renvoyer le state dans le default !!!!!
    }
}