import './App.css';
import BtnCounterReset from './containers/btn-counter-reset/btn-counter-reset';
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
    a) Importer le store précédement créé
    b) Ajout du composant "Provider" qui permet de diffuser le store
5. Créer des composants qui utilisent le store
    Les composants liés au store sont dans les dossiers containers et pages (si le routing est présent) -> choix personnel
    Les composants dans le dossier "components" ne sont pas connectés au store
    Pour qu'un composant puisse utiliser le store, il est possible d'utiliser les hooks fourni par "react-redux"
        - useSelector => Permet de récuperer les données du store
        - useDispatch => Permet d'envoyer des actions au dispatcher de redux
    Note: Il est possible d'utiliser l'ancienne technique via le HOC "Connect"
*/

function App() {
  return (
    <div className="App">
        <h1>Demo Redux</h1>
        < CounterDisplay />
        < CounterAction />
        < CounterAction step={5} />
        < BtnCounterReset />
    </div>
  );
}

export default App;
