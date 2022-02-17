import './App.css';
import CounterAction from './containers/counter-action/counter-action';
import CounterDisplay from './containers/counter-display/counter-display';

/* DEMO 11 - LE STORE & REDUX */

// il faut toujours qu'une seule instance de redux (un store unique, une seule source de données)
// pour eviter le code trop complexe, nous allons utiliser redux avec une structure d'implémentation (pattern)

/* STEP BY STEP
1. Installer le nécessaire pour redux
    - redux         (le store)
    - react-redux   (le lien entre react et redux)
2. Preparer la structure de fichiers
3. Définition du store avec les premieres interactions
    a) Définition des actions possibles
    b) Définition du reducer des actions
    c) Configuration du store
4. Diffusion du store dans l'app (mettre au niveau le plus haut possible) -> index.js
*/

function App() {
  return (
    <div className="App">
        <h1>Demo Redux</h1>
        < CounterDisplay />
        < CounterAction />
    </div>
  );
}

export default App;
