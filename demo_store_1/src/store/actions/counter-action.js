// Création des constantes pour les actions possibles
export const COUNTER_INCREMENT = "counter/increment"; // catégorie: counter, type d'action: increment
export const COUNTER_DECREMENT = "counter/decrement";
export const COUNTER_RESET = "counter/reset";

// Création de méthodes pour générer les objets "action"
// Fonction "increment" avec la valeur a augmenter 
export const increment = function(step) {
    // Envoyer un objet avec l'action
    return {
        type: COUNTER_INCREMENT, // le type d'action
        payload: step // les données qui accompagnent l'action
    }
}

// Fonction "decrement" avec la valeur a diminuer
export const decrement = (step) => {
    return {
        type: COUNTER_DECREMENT,
        payload: step
    }
}

// Fonction lambda "reset" => uniquement quand il n'y a rien à faire
export const reset = () => ({
    type: COUNTER_RESET
})