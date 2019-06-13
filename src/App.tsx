import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConceptView } from './ConceptView';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ConceptView />
      </header>
    </div>
  );
}

export default App;