// ici on importe tout ce dont on a besoin
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import Message from './components/message/message';
import Person from './components/person/person';
import FruitList from './components/fruit-list/fruit-list';
import SchoolMemberList from './components/school-member-list/school-member-list';
import SimpleEvent from './components/simple-event/simple-event';
import MultiNumber from './components/multi-number/multi-number';
import FormulaireTest from './components/formulaire-test/formulaire-test';
import Reservoir from './components/reservoir/reservoir';
import SearchBar from './components/search-bar/search-bar';

function App() {

    // Pour le SchoolMemberList
    const people = [
        { id: 1, firstname: 'Iman', lastname: 'Chamileva', status: 'Eleve' },
        { id: 2, firstname: 'Barbara', lastname: 'Branco', status: 'Eleve' },
        { id: 3, firstname: 'Loic', lastname: 'Baudoux', status: 'Prof' },
        { id: 4, firstname: 'Charlotte', lastname: 'Schartier', status: 'Eleve' },
        { id: 5, firstname: 'Fatima', lastname: 'El Harraoui', status: 'Eleve' },
        { id: 6, firstname: 'Sabrina', lastname: 'Stefanizzi', status: 'Eleve' }
    ]

    // Pour le Reservoir
    const [message, setMessage] = useState('')

    const handleReservoirPlein = () => {
        setMessage('Le reservoir est plein')
    }

    const handleReservoirVide = () => {
        setMessage('Le reservoir est vide')
    }

    // Pour le SearchBar
    const handleSearchResult = (data) => {
        console.log('on recherche ' + data)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                < Welcome name="Maureen" />
                < Message author="Manon" content="Yolo" />
                < Message content="La vie est belle" />

                <hr/>

                < Person firstname="Lison" lastname="Ferné" gender="F" />
                < Person firstname="Aurélien" lastname="Strimelle" gender="M" />

                <hr/>

                < FruitList />

                <hr />

                < SchoolMemberList members={people} />

                <hr />

                < SimpleEvent />

                <hr />

                < MultiNumber />

                <hr />

                < FormulaireTest />

                <hr />

                < Reservoir onReservoirPlein={handleReservoirPlein}
                            onReservoirVide={handleReservoirVide} />

                {message && (
                    <p>{message}</p>
                )}

                <hr />

                < SearchBar onSearch={handleSearchResult} />
            </header>
        </div>
    );
}

export default App;