import { useState } from 'react';
import './App.css';
import AddNew from './components/add-new/add-new';
import List from './components/list/list';

function App() {

  // Definition d'un state pour contenir la liste des taches
  const [tasks, setTasks] = useState([])

  const handleAdd = (newTask) => {
    // Ajouter la nouvelle tache dans la liste des taches
    setTasks(elements => [newTask, ...elements])
  }

  // Supprimer une tâche
  const handleDelete = (id) => {
    // Mise à jour de la liste des tâches
    // -> Via le filter, on obtient la copie de la liste sans l'element ciblé
    setTasks(elements => elements.filter(t => t.id !== id))
  }

  const handleFinished = (id) => {
    // Mise à jour de la liste des tâches
    // -> Via le map, on transforme les données pour valider le "complete" de l'element ciblé
    setTasks(elements => elements.map(t => (t.id !== id) ? t : {...t, complete: true}))
  }

  return (
    <div className="App">
      <div className="title">To Do List</div>

      <div className="empty"></div>

      <h3>Ajouter une nouvelle tâche ✔</h3>
      < AddNew onAdd={handleAdd} />

      <div className="empty"></div>

      <h3>Liste des tâches 📃</h3>
      < List taskList={tasks} onDeleteTask={handleDelete} onFinishedTask={handleFinished} />
    </div>
  );
}

export default App;
