import React from "react"
import { Pokemon } from "../../../../../models/colyseus-models/pokemon"
import { IPokemonConfig } from "../../../../../models/mongo-models/user-metadata"
import { RarityColor } from "../../../../../types/Config"
import { Ability } from "../../../../../types/enum/Ability"
import { Rarity, Stat } from "../../../../../types/enum/Game"
import { Passive } from "../../../../../types/enum/Passive"
import { AbilityName } from "../../../../../types/strings/Ability"
import { PassiveDescription } from "../../../../../types/strings/Passive"
import { StatLabel } from "../../../../../types/strings/Stat"
import { getPortraitSrc } from "../../../utils"
import { addIconsToDescription } from "../../utils/descriptions"
import { AbilityTooltip } from "../ability/ability-tooltip"
import SynergyIcon from "../icons/synergy-icon"
import "./game-pokemon-detail.css"

export function GamePokemonDetail(props: {
  pokemon: Pokemon
  pokemonConfig?: IPokemonConfig
}) {
  const pokemonStats = [
    { stat: Stat.HP, value: props.pokemon.hp },
    { stat: Stat.DEF, value: props.pokemon.def },
    { stat: Stat.ATK, value: props.pokemon.atk },
    { stat: Stat.MANA, value: props.pokemon.maxMana },
    { stat: Stat.SPE_DEF, value: props.pokemon.speDef },
    { stat: Stat.RANGE, value: props.pokemon.range }
  ]

  return (
    <div className="game-pokemon-detail in-shop">
      <img
        className="game-pokemon-detail-portrait"
        style={{ borderColor: RarityColor[props.pokemon.rarity] }}
        src={getPortraitSrc(
          props.pokemon.index,
          props.pokemonConfig?.selectedShiny ?? props.pokemon.shiny,
          props.pokemonConfig?.selectedEmotion ?? props.pokemon.emotion
        )}
      />
      <div className="game-pokemon-detail-entry">
        <p className="game-pokemon-detail-entry-name">{props.pokemon.name}</p>
        <p
          className="game-pokemon-detail-entry-rarity"
          style={{ color: RarityColor[props.pokemon.rarity] }}
        >
          {props.pokemon.rarity}
        </p>
      </div>

      <div className="game-pokemon-detail-types">
        {props.pokemon.types.map((type) => (
          <SynergyIcon type={type} key={type} />
        ))}
      </div>

      <div className="game-pokemon-detail-stats">
        {pokemonStats.map(({ stat, value }) => (
          <div key={stat}>
            <img
              src={`assets/icons/${stat}.png`}
              alt={stat}
              title={StatLabel[stat]["eng"]}
            />
            <p>{value}</p>
          </div>
        ))}
      </div>

      {props.pokemon.passive !== Passive.NONE && (
        <div className="game-pokemon-detail-passive">
          <p>Passive: {addIconsToDescription(PassiveDescription[props.pokemon.passive])}</p>
        </div>
      )}

      {props.pokemon.skill !== Ability.DEFAULT && (
        <div className="game-pokemon-detail-ult">
          <div className="ability-name">
            <p>{AbilityName[props.pokemon.skill].eng}</p>
          </div>
          <div>
            <AbilityTooltip
              ability={props.pokemon.skill}
              tier={
                props.pokemon.rarity === Rarity.MYTHICAL
                  ? 3
                  : props.pokemon.stars
              }
            />
          </div>
        </div>
      )} 
    </div>
  )
}
