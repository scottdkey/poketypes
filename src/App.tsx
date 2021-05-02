import React from 'react';
import './App.css';
import TypePicker from "./components/typePicker"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypePicker />
        <TypePicker />
      </header>
    </div>
  );
}

export default App;
