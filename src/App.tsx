import React, { useState } from 'react';
import './App.scss';
import { PokemonTypesInterface } from './components/PokemonType';
import TypePicker from "./components/typePicker"

function App(): JSX.Element {
  const [typeOne, setTypeOne] = useState<PokemonTypesInterface | undefined>(undefined)
  const [typeTwo, setTypeTwo] = useState<PokemonTypesInterface>()

  console.log(typeTwo)


  function SetTypeOne(item: PokemonTypesInterface) {
    setTypeOne(item)
  }
  function SetTypeTwo(item: PokemonTypesInterface) {
    setTypeTwo(item)
  }
  return (
    <div className="App">
      <div className="Body">
        <TypePicker setParentState={SetTypeOne} />
        {typeOne == undefined ? null : <TypePicker setParentState={SetTypeTwo} />}
      </div>
    </div>
  );
}

export default App;
