import React, { useState } from 'react';
import style from './formulaire-test.module.css';

const FormulaireTest = (props) => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [need, setNeed] = useState('html')
    const [message, setMessage] = useState('')
    const [peanuts, setPeanuts] = useState('oui')
    const [typeSucre, setTypeSucre] = useState(false)
    const [typeSale, setTypeSale] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            prenom,
            nom,
            email,
            need,
            message,
            peanuts,
            typeSucre,
            typeSale
        }

        console.log(data)
        // Cas réel: Traitement des données, envois d'une requete AJAX

        handleResetForm()
    }

    const handleResetForm = () => {
        setPrenom('')
        setNom('')
        setEmail('')
        setNeed('html')
        setMessage('')
        setPeanuts('oui')
        typeSucre(false)
        typeSale(false)
    }

    return (
        <>
            <form className={style.myForm} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} />
                </div>

                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} value={nom} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label htmlFor="besoin">Type de besoin</label>
                    <select id="need" onChange={(e) => setNeed(e.target.value)} value={need} >
                        <optgroup label="Back-End">
                            <option value="php">PHP</option>
                            <option value="nodejs">Node.js</option>
                        </optgroup>
                        <optgroup label="Front-End">
                            <option value="html">HTML / CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="react">React</option>
                        </optgroup>
                    </select>
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols="100" rows="5" onChange={(e) => setMessage(e.target.value)} value={message} />
                </div>

                <div>
                    <label htmlFor="peanuts">Aimes-tu les cacahuètes ?</label>
                    <input type="radio" name="peanuts" id="peanuts_oui" value="oui" onChange={(e) => setPeanuts(e.target.value)} checked={peanuts === 'oui'} />
                    <label htmlFor="peanuts_oui">Oui</label>
                    <input type="radio" name="peanuts" id="peanuts_oui" value="non" onChange={(e) => setPeanuts(e.target.value)} checked={peanuts === 'non'} />
                    <label htmlFor="peanuts_non">Non</label>
                </div>

                <div>
                    <label htmlFor="peanutsType">Quel type de cacahuètes ?</label>
                    <input type="checkbox" id="sucre" onChange={(e) => setTypeSucre(e.target.checked)} checked={typeSucre} />
                    <label htmlFor="sucre">Sucrées</label>
                    <input type="checkbox" id="sale" onChange={(e) => setTypeSale(e.target.checked)} checked={typeSale} />
                    <label htmlFor="sale">Salées</label>
                </div>

                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </>
    )
}

export default FormulaireTest;