import YouTube from "react-youtube";
import style from './container-video.module.css';

const ContainerVideo = (props) => {

    const videoId = props.id

    const options = {
        height: '470',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        }
    }

    return (
        <>
            < YouTube videoId={videoId} opts={options} className={style.player} />
        </>
    )
}

export default ContainerVideo;