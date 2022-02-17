import { useState } from 'react';
import style from './add-new.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const AddNew = (props) => {
    const [nom, setNom] = useState('')
    const [desc, setDesc] = useState('')
    const [priorite, setPriorite] = useState('normal')

    const handleAjouter = (e) => {
        e.preventDefault();

        const data = {
            id: nanoid(),
            nom,
            desc,
            priorite,
            complete : false
        }

        props.onAdd(data)

        setNom('')
        setDesc('')
        setPriorite('normal')
    }

    return (
        <div className={style.containerNew}>
            <form className={style.formNew} onSubmit={handleAjouter}>
                <div className={style.formNom}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} value={nom} required />
                </div>

                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" cols="30" rows="4" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div>

                <div>
                    <label htmlFor="priorite">Priorité</label>
                    <select name="priorite" id="priorite" onChange={(e) => setPriorite(e.target.value)} value={priorite}>
                        <option value="bas">Basse</option>
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>

                <div>
                    <input type="submit" value="Ajouter" />
                </div>
            </form>
        </div>
    )
}

AddNew.defaultProps = {
    priorite: 'normal',
    onAdd: () => {}
}

AddNew.propTypes = {
    onAdd: PropTypes.func
}

export default AddNew;