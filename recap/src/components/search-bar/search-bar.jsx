import style from './search-bar.module.css';

const SearchBar = (props) => {

    const handleSearch = (e) => {
        const value = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearch} className={style.search} />
                <button type="submit" className={style.btnSearch}>Rechercher</button>
            </form>
        </>
    )
}

export default SearchBar;