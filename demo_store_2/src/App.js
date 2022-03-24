import './App.css';
import ProductDetail from './containers/product-detail/product-detail';
import ProductList from './containers/product-list/product-list';
import WeatherApp from './containers/weather-app/weather-app';

function App() {
  return (
    <div className="App">
        <div className="left">
            < WeatherApp />
            < ProductList />
        </div>
        <div className="right">
            < ProductDetail />
        </div>
    </div>
  );
}

export default App;
