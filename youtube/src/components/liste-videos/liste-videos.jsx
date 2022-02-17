import style from './liste-videos.module.css';
import PropTypes from 'prop-types';

const ListeVideos = (props) => {

    const videosJSX = props.searchedVideos.map(
        obj => <li key={obj.id}>{obj.vid}</li>
    )

    return (
        <div className={style.liste}>
            <ul>
                {videosJSX}
            </ul>
        </div>
    )
}

ListeVideos.defaultProps = {
    searchedVideos: []
}

ListeVideos.propTypes = {
    searchedVideos: PropTypes.array
}

export default ListeVideos;