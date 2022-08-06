import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import Albumfeature from './features/Album';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Minh Nghĩa
        </p>
      </header>
      <Albumfeature />
    </div>
  );
}

export default App;
