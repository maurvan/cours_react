import React, { useState } from 'react';

const SearchBar = (props) => {
    const { hint, onSearch } = props

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // on envoie l'event
        onSearch(query)

        // on reset le formulaire
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={hint} onChange={(e) => setQuery(e.target.value)} value={query} />
            <input type="submit" value="Rechercher" disabled={query === ''} />
        </form>
    )
}

SearchBar.defaultProps = {
    hint: '',
    onSearch: () => {}
}

export default SearchBar;