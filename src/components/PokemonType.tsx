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
import { FC, SVGProps } from "react"

export interface PokemonTypesInterface {
  type: string
  icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }>
  [propName: string]: string | FC<SVGProps<SVGSVGElement>>;

}

export const PokeTypes: Array<PokemonTypesInterface> = [
  { type: "bug", icon: BugIcon },
  { type: "dark", icon: DarkIcon },
  { type: "dragon", icon: DragonIcon },
  { type: "electric", icon: ElectricIcon },
  { type: "fairy", icon: FairyIcon },
  { type: "fighting", icon: FightingIcon },
  { type: "fire", icon: FireIcon },
  { type: "flying", icon: FlyingIcon },
  {
    type: "ghost", icon: GhostIcon
  },
  { type: "grass", icon: GrassIcon },
  { type: "ground", icon: GroundIcon },
  { type: "ice", icon: IceIcon },
  { type: "normal", icon: NormalIcon },
  { type: "poison", icon: PoisonIcon },
  { type: "psychic", icon: PsychicIcon },
  { type: "rock", icon: RockIcon },
  { type: "steel", icon: SteelIcon },
  { type: "water", icon: WaterIcon }

]

