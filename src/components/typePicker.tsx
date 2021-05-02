import React, { FC, ReactChildren, useState } from "react"
import { PokeTypes, PokemonTypesInterface, PokeType } from "./PokemonType"

import "./typePicker.scss"



const TypePicker: FC = () => {
  const [selected, setSelected] = useState<string>("dark");
  const [openSelector, setOpenSelector] = useState<boolean>(false)

  const setState = (type: string) => {
    setSelected(type)
    setOpenSelector(false)
  }
  const RenderAllTypes = ({ list }: { list: Array<PokemonTypesInterface> }) => {
    return <div className={`circle-container`}>{list.map((item: PokemonTypesInterface, index) => (
      <item.icon className={`icon ${item.type} ${index}`} key={item.type} onClick={() => setState(item.type)} />
    ))}</div>

  }

  type RenderSelectedType = {
    type: string
  }

  const RenderSelected = ({ type }: RenderSelectedType) => {
    const p = PokeType(type)
    console.log(p)

    if (p == undefined) {
      return (
        <>
          <div> Nothing Selected</div>
        </>
      )
    } else {
      return (
        <>
          <p.icon className={`icon ${p.type} selected`} onClick={() => setOpenSelector(!openSelector)} />
        </>
      )
    }
  }


  return (
    <div className="picker-container">
      <RenderSelected type={selected} />
      {openSelector ? <RenderAllTypes list={PokeTypes} /> : null}
    </div >
  )
}


export default TypePicker