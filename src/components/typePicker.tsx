import React, { FC, useState } from "react"
import { PokeTypes, PokemonTypesInterface } from "./PokemonType"
import "./typePicker.scss"



const TypePicker: FC = () => {
  const [selected, setSelected] = useState<string>("test")

  const setState = (type: string) => {
    setSelected(type)
  }
  const RenderAllTypes = ({ list }: { list: Array<PokemonTypesInterface> }) => {
    return <>{list.map((item: PokemonTypesInterface) => (
      <item.icon className={`icon ${item.type}`} key={item.type} onClick={() => setState(item.type)} />
    ))}</>
  }


  return (
    <div>
      <div>Selected: {selected}</div>
      <RenderAllTypes list={PokeTypes} />
    </div>
  )
}


export default TypePicker