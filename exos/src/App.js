import './App.css';
import { nanoid } from 'nanoid'; // npm i nanoid
import Ex01 from './components/ex01/ex01';
import Ex02 from './components/ex02/ex02';

function App() {
  const productsList = [
    { id: nanoid(), nom: 'TV 4k', prix: 500, promo: false },
    { id: nanoid(), nom: 'Machine à laver', prix: 100, promo: true },
    { id: nanoid(), nom: 'PlayStation 4', prix: 300, promo: false },
    { id: nanoid(), nom: 'Four à micro-ondes', prix: 60, promo: true },
    { id: nanoid(), nom: 'Frigo américain', prix: 450, promo: true }
  ]

  return (
    // Utilisation des fragments
    // Permet de regrouper des balises sans mettre de "div" 
    <>
      < Ex01 nom="Maureen" age={30} />
      < Ex02 products={productsList} />
    </>
  );
}

export default App;
