import React, { useState } from "react"
import { PokeTypes, PokemonTypesInterface, PokeType } from "./PokemonType"
import Icon from "@bit/semantic-org.semantic-ui-react.icon"
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />
import { ReactComponent as CloseIcon } from "../assets/svgs/close-button.svg"

import "./typePicker.scss"

interface typePicker {
  setParentState(item: PokemonTypesInterface | undefined): void;
}

const TypePicker = ({ setParentState }: typePicker): JSX.Element => {
  const [selected, setSelected] = useState<PokemonTypesInterface | undefined>(undefined);
  const [openSelector, setOpenSelector] = useState<boolean>(false)

  const setState = (type: PokemonTypesInterface | undefined) => {
    setSelected(type)
    setOpenSelector(false)
    setParentState(type)
  }
  const RenderAllTypes = ({ list }: { list: Array<PokemonTypesInterface> }) => {
    return <div className={`circle-container`}>{list.map((item: PokemonTypesInterface) => (
      <item.icon className={`icon ${item.type}`} key={item.type} onClick={() => setState(item)} />

    ))}
      <CloseIcon className="undefined" onClick={() => setState(undefined)} />
    </div>

  }

  const RenderSelected = () => {

    const type = () => {
      if (selected != undefined) {
        return selected.type
      } else {
        return "unselected"
      }
    }
    const p = PokeType(type())
    console.log(p)

    if (p == undefined) {
      return (
        <div className={`icon selected`}>
          {style}
          <CloseIcon name="close" onClick={() => setOpenSelector(!openSelector)} />
        </div>
      )
    } else {
      return (
        <>
          <p.icon className={`${p.type} selected`} onClick={() => setOpenSelector(!openSelector)} />
        </>
      )
    }
  }


  return (
    <div className="picker-container">
      <RenderSelected />
      {openSelector ? <RenderAllTypes list={PokeTypes} /> : null}
    </div >
  )
}


export default TypePicker