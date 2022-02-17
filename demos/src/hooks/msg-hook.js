/* Template de logique pour un Hook personnalisé */

import { useState } from "react";
import { nanoid } from "nanoid";

/** Pour gerer le messages :
 * - stocker les messages
 * - ajouter un message
 * - supprimer un message
 * - supprimer tous les messages
*/

export const useMessages = () => {

    const [messages, setMessages] = useState([])

    /**
     * Permet l'ajout d'un message
     * @param {string} message Le nouveau message
     */
    const addMessage = (message) => {
        // Création d'un objet message avec un id
        const newMsg = {
            id: nanoid(),
            msg: message
        }

        // Ajout du message dans le State
        setMessages(m => [...m, newMsg])
    }

    /**
     * Permet de supprimer un message
     * @param {string} id L'identifiant du message
     */
    const deleteMessage = (id) => {
        // Utilisation du filter pour tout récuperer sauf l'element ciblé
        setMessages(m => m.filter(msg => msg.id !== id))
    }

    /**
     * Permet de supprimer tous les messages
     */
    const deleteAllMessages = () => {
        setMessages([])
    }

    // Renvoi des elements qu'on veut rendre accessible
    return [
        messages,
        addMessage,
        deleteMessage,
        deleteAllMessages
    ]
}