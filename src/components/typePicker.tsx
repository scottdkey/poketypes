import React, { FC, useState } from "react"

const pokeTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "Fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"

]

const TypePicker: FC = () => {
  const [selected, setSelected] = useState<string>("test")

  const setState = (type: string) => {
    setSelected(type)
  }
  const RenderAllTypes = ({ list }: { list: Array<string> }) => {
    return <>{list.map((item: string) => (
      <button onClick={() => setState(item)} key={item}>{item}</button>
    ))}</>
  }


  return (
    <div>
      <div>Selected: {selected}</div>
      <RenderAllTypes list={pokeTypes} />
    </div>
  )
}


export default TypePicker