import { ReactComponent as BugIcon } from "../assets/svgs/pokemonTypeIcons/bug.svg"
import { ReactComponent as DarkIcon } from "../assets/svgs/pokemonTypeIcons/dark.svg"
import { ReactComponent as DragonIcon } from "../assets/svgs/pokemonTypeIcons/dragon.svg"
import { ReactComponent as ElectricIcon } from "../assets/svgs/pokemonTypeIcons/electric.svg"
import { ReactComponent as FairyIcon } from "../assets/svgs/pokemonTypeIcons/fairy.svg"
import { ReactComponent as FightingIcon } from "../assets/svgs/pokemonTypeIcons/fighting.svg"
import { ReactComponent as FireIcon } from "../assets/svgs/pokemonTypeIcons/fire.svg"
import { ReactComponent as FlyingIcon } from "../assets/svgs/pokemonTypeIcons/flying.svg"
import { ReactComponent as GhostIcon } from "../assets/svgs/pokemonTypeIcons/ghost.svg"
import { ReactComponent as GrassIcon } from "../assets/svgs/pokemonTypeIcons/grass.svg"
import { ReactComponent as GroundIcon } from "../assets/svgs/pokemonTypeIcons/ground.svg"
import { ReactComponent as IceIcon } from "../assets/svgs/pokemonTypeIcons/ice.svg"
import { ReactComponent as NormalIcon } from "../assets/svgs/pokemonTypeIcons/normal.svg"
import { ReactComponent as PoisonIcon } from "../assets/svgs/pokemonTypeIcons/poison.svg"
import { ReactComponent as PsychicIcon } from "../assets/svgs/pokemonTypeIcons/psychic.svg"
import { ReactComponent as RockIcon } from "../assets/svgs/pokemonTypeIcons/rock.svg"
import { ReactComponent as SteelIcon } from "../assets/svgs/pokemonTypeIcons/steel.svg"
import { ReactComponent as WaterIcon } from "../assets/svgs/pokemonTypeIcons/water.svg"
import { Pokedex } from "pokeapi-js-wrapper"
import { FC, SVGProps } from "react"

export interface PokemonTypesInterface {
  type: string
  icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }>
  attack: StrenghtsWeaknesses
  defence: StrenghtsWeaknesses
  [propName: string]: string | FC<SVGProps<SVGSVGElement>> | StrenghtsWeaknesses;

}
const strengthsWeaknesses: StrenghtsWeaknesses = {
  water: 0, steel: 0, rock: 0, psychic: 0, poison: 0, normal: 0, ice: 0, ground: 0, grass: 0, ghost: 0, flying: 0, fire: 0, fighting: 0, fairy: 0, electric: 0, dragon: 0, dark: 0, bug: 0,
};

const pokeDex = new Pokedex()

export const PokeTypes: Array<PokemonTypesInterface> = [
  { type: "bug", icon: BugIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses },
  { type: "dark", icon: DarkIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "dragon", icon: DragonIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "electric", icon: ElectricIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "fairy", icon: FairyIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "fighting", icon: FightingIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "fire", icon: FireIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "flying", icon: FlyingIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "ghost", icon: GhostIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "grass", icon: GrassIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "ground", icon: GroundIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "ice", icon: IceIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "normal", icon: NormalIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "poison", icon: PoisonIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "psychic", icon: PsychicIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "rock", icon: RockIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "steel", icon: SteelIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  },
  { type: "water", icon: WaterIcon, attack: strengthsWeaknesses, defence: strengthsWeaknesses  }

]

type parseDamageType = {
  name: string,
  url: string
}
function parseDamage(array: Array<parseDamageType>) {
  return array.map(damageFrom => { return damageFrom.name })

}
interface StrenghtsWeaknesses {
  [key: string]: number,
  water: number,
  steel: number,
  rock: number,
  psychic: number,
  poison: number,
  normal: number,
  ice: number,
  ground: number,
  grass: number,
  ghost: number,
  flying: number,
  fire: number,
  fighting: number,
  fairy: number,
  electric: number,
  dragon: number,
  dark: number,
  bug: number,
}


class Stats {

  defence = strengthsWeaknesses
  attack = strengthsWeaknesses
  setAttack(doubleTo: Array<string>, halfTo: Array<string>, noneTo: Array<string>): void {
    doubleTo.forEach(item => this.attack[item] = 2)
    halfTo.forEach(item => this.attack[item] = 0.5)
    noneTo.forEach(item => this.attack[item] = 0)
  }
  setDefence(doubleFrom: Array<string>, halfFrom: Array<string>, noneFrom: Array<string>) {
    doubleFrom.forEach(item => this.defence[item] = 2)
    halfFrom.forEach(item => this.defence[item] = 0.5)
    noneFrom.forEach(item => this.defence[item] = 0)
  }
  getStats = async (type: string): Promise<void> => {
    const res = await pokeDex.getTypeByName(type)
    const dmgRelations = res.damage_relations
    this.setAttack(parseDamage(dmgRelations.double_damage_to), parseDamage(dmgRelations.half_damage_to), parseDamage(dmgRelations.no_damage_to))
    this.setDefence(parseDamage(dmgRelations.double_damage_from), parseDamage(dmgRelations.half_damage_from), parseDamage(dmgRelations.no_damage_from))
  }

}



export const PokeType = (type: string): PokemonTypesInterface | undefined => {
  const returnType = PokeTypes.find((pokeType) => {
    if (pokeType.type == type) {
      const stats: Stats = new Stats()
      stats.getStats(type)
      const returnObject = { ...pokeType, attack: stats.attack, defence: stats.defence }
      return returnObject
    } else {
      return undefined
    }
  })

  return returnType
}
