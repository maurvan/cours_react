import { useState } from 'react';
import style from './search-bar.module.css';
import PropTypes from 'prop-types';

const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSearched(search)
        
        setSearch('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setSearch(e.target.value)} className={style.search} value={search} />
                <button type="submit" className={style.btnSearch}>Rechercher</button>
            </form>
        </>
    )
}

SearchBar.defaultProps = {
    onSearched: () => {}
};

SearchBar.propTypes = {
    onSearched: PropTypes.func
};

export default SearchBar;