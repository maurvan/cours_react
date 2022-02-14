import './App.css';
import SearchBar from './components/search-bar/search-bar';
import ContainerVideo from './components/container-video/container-video';
import ListeVideos from './components/liste-videos/liste-videos';

function App() {
  return (
    <div className="App">
      <header>
        <img src="logo.png" id="logo" alt="logo of the Youtube App" />
        <h1>Youtube App</h1>
      </header>
      <div className="container">
        <div className="main">
          < SearchBar />
          < ContainerVideo />
        </div>
        <aside>
          < ListeVideos />
        </aside>
      </div>
    </div>
  );
}

export default App;
