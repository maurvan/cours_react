import { useEffect, useState } from "react";

const Ex06 = () => {

    const [btn, setBtn] = useState(true)

    return (
        <>
            <button onClick={() => setBtn(b => !b)}>Jour / Heure</button>
            {(btn) ? < Horloge /> : < DateDuJour />}
        </>
    )
}

const Horloge = () => {

    const [time, setTime] = useState(new Date())

    const [heure, minutes, secondes] = [time.getHours(), time.getMinutes(), time.getSeconds()]

    useEffect(() => {
        // Start du timer
        const timerID = setTimeout(() =>{
            // Mise à jour du state
            setTime(new Date())
        }, 200)

        // Fonction pour nettoyer le code (arrêt du timer)
        // sinon on avait un memory leak car le composant n'est plus la
        return () => {
            clearTimeout(timerID)
        }
    })

    return (
        <>
            <p>{heure} : {minutes} : {secondes}</p>
        </>
    )
}

const DateDuJour = () => {

    const [ajd, setAjd] = useState(new Date())
    const [jour, annee] = [ajd.getDate(), ajd.getFullYear()]

    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"]
    let month = mois[ajd.getMonth()]

    useEffect(() => {
        const demain = new Date(ajd.getFullYear(), ajd.getMonth(), ajd.getDate() + 1)
        const attente = demain.getTime() - ajd.getTime()

        // On attends demain minuit pour updater
        const timerID = setTimeout(() => {
            setAjd(new Date())
        }, attente)

        // On stoppe le timeout si l'utilisateur quitte la page
        return () => {
            clearTimeout(timerID)
        }
    })

    return (
        <>
            <p>{jour} {month} {annee}</p>
        </>
    )
}

export default Ex06;