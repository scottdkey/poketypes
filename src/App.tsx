import React from 'react';
import './App.css';
import TypePicker from "./components/typePicker"

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <TypePicker />
      </header>
    </div>
  );
}

export default App;
