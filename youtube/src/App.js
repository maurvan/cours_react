import './App.css';
import SearchBar from './components/search-bar/search-bar';
import ContainerVideo from './components/container-video/container-video';
import ListeVideos from './components/liste-videos/liste-videos';
import { useState } from 'react';

function App() {

    const [videos, setVideos] = useState([])

    const handleCreateList = (vid) => {
        const newVideo = {
            vid: vid,
            id: id
        }
        
        setVideos(v => [newVideo, ...v])
    }

  return (
    <div className="App">
      <header>
        <img src="logo.png" id="logo" alt="logo of the Youtube App" />
        <h1>Youtube App</h1>
      </header>
      <div className="container">
        <div className="main">
          < SearchBar onSearched={handleCreateList} />
          < ContainerVideo />
        </div>
        <aside>
          < ListeVideos searchedVideos={videos} />
        </aside>
      </div>
    </div>
  );
}

export default App;
