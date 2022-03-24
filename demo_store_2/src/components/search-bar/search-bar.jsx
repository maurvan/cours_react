import { useForm } from 'react-hook-form'; // -> doc: https://react-hook-form.com
import PropTypes from 'prop-types';

const SearchBar = (props) => {

    const { submitName } = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    /* Description des elements du "useForm"
        - handleSubmit: Gere le preventDefault et permet d'obtenir les datas
        - register: Permet de "lier" les balises html et le state de react
        - reset: Permet de déclencher un "reset" du formulaire
        - formState: Permet d'obtenir des infos sur l'etat du form (les erreurs, par exemple)
    */

    const handleSearch = (data) => {
        console.log(data)
        props.onResult(data.content)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(handleSearch)}>
            <input type="text" {...register("content", { required: true })} />
            <button type="submit">{submitName}</button>
            { errors.content && <div>Ce champs est obligatoire</div> }
        </form>
    )
}

SearchBar.defaultProps = {
    submitName: 'Rechercher',
    onResult: () => {}
}

SearchBar.propTypes = {
    submitName: PropTypes.string,
    onResult: PropTypes.func
}

export default SearchBar;