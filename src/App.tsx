import React, { useState } from 'react';
import './App.scss';
import { PokemonTypesInterface } from './components/PokemonType';
import TypePicker from "./components/typePicker"
import TypeCompairison from "./components/TypeCompairison"

function App(): JSX.Element {
  const [typeOne, setTypeOne] = useState<PokemonTypesInterface | undefined>(undefined)
  const [typeTwo, setTypeTwo] = useState<PokemonTypesInterface>()



  function SetTypeOne(item: PokemonTypesInterface) {
    setTypeOne(item)
  }
  function SetTypeTwo(item: PokemonTypesInterface) {
    setTypeTwo(item)
  }
  return (
    <div className="App">
      <div className="Body">
        <div className="picker-area">
          <TypePicker setParentState={SetTypeOne} />
          {typeOne == undefined ? null : <TypePicker setParentState={SetTypeTwo} />}
        </div>
        <TypeCompairison compairisonObject={typeOne} />
        <TypeCompairison compairisonObject={typeTwo} />
      </div>
    </div>
  );
}

export default App;
