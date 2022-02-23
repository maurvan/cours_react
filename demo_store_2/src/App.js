import './App.css';
import ProductDetail from './containers/product-detail/product-detail';
import ProductList from './containers/product-list/product-list';

function App() {
  return (
    <div className="App">
     <div className="left">
        < ProductList />
     </div>
     <div className="right">
        < ProductDetail />
     </div>
    </div>
  );
}

export default App;
