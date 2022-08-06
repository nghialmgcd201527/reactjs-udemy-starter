import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import Albumfeature from './features/Album';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Minh Nghĩa
        </p>
      </header>
      <ColorBox />
    </div>
  );
}

export default App;
