import React from 'react';
import { PokemonTypesInterface } from './PokemonType';



interface typeCompairison {
  compairisonObject: PokemonTypesInterface | undefined
}

const TypeCompairison = ({ compairisonObject }: typeCompairison): JSX.Element => {


  if (compairisonObject == undefined) {
    return <>
    </>
  } else {
    return <>
      {compairisonObject.attack.water}
      {compairisonObject.attack.fire}
      {compairisonObject.attack.electric}
    </>
  }
}

export default TypeCompairison