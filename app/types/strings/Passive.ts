import { Stat } from "../enum/Game"
import { Passive } from "../enum/Passive"
import { Status } from "../enum/Status"
import { Synergy } from "../enum/Synergy"
import { Weather } from "../enum/Weather"

export const PassiveDescription: { [key in Passive]: string } = {
  [Passive.NONE]: "No passive",
  [Passive.TYROGUE]: `Will choose a combat discipline based on the first item given`,
  [Passive.PROTEAN2]: `The pokemon acquires the typing of the 2 highest synergies on the team`,
  [Passive.PROTEAN3]: `The pokemon acquires the typing of the 3 highest synergies on the team`,
  [Passive.CASTFORM]: `Castform changes its form and the weather to ${Weather.SUN}, ${Weather.RAIN} or ${Weather.SNOW} depending on your dominant synergy between ${Synergy.FIRE} ${Synergy.WATER} ${Synergy.ICE}`,
  [Passive.PHIONE]: `Phione is looking for an Aqua Egg`,
  [Passive.PRIMAL]: `Legend has it that you could unleash the ancient powers of these pokemons`,
  [Passive.WONDER_GUARD]: `Reduce received damage and received healing to 1`,
  [Passive.ELECTRIC_SURGE]: `Give ${Status.ELECTRIC_FIELD} to your Electric Pokemon, boosting their damage by 20%`,
  [Passive.GRASSY_SURGE]: `Give ${Status.GRASS_FIELD} to your Grass Pokemon, boosting their damage by 20%`,
  [Passive.MISTY_SURGE]: `Give ${Status.FAIRY_FIELD} to your Fairy Pokemon, boosting their damage by 20%`,
  [Passive.PSYCHIC_SURGE]: `Give ${Status.PSYCHIC_FIELD} to your Psychic Pokemon, boosting their damage by 20%`,
  [Passive.EEVEE]: `Eevee can evolve into one of the 8 Eeveelutions when given a synergy stone`,
  [Passive.TREE]: `Pretends to be a tree and does not attack but gain 2 ${Stat.ATK} per second instead (stackable).\nStarts attacking when ${Stat.MANA} bar is full.`,
  [Passive.DITTO]: `Ditto can't fight, but it can transform to create a copy of the basic form of one of your pokemons you drop it over (except Mythical and Hatch).`,
  [Passive.EGG]: `You can feel something moving inside.`,
  [Passive.HATCH]: `Hatched pokemons evolve automatically after 4 stages`,
  [Passive.SYNCHRO]: `If the pokemon is affected by ${Status.POISON}, ${Status.BURN}, ${Status.WOUND} or ${Status.SILENCE}, the enemy caster will suffer the same negative status`,
  [Passive.TADPOLE]: `Poliwhirl will evolve into Poliwrath if placed on the frontlane, Politoed otherwise.`,
  [Passive.BIVALVE]: `Clamperl will evolve into Huntail if placed on the frontlane, Gorebyss otherwise.`,
  [Passive.SUN]: `Change weather to ${Weather.SUN}`,
  [Passive.RAIN]: `Change weather to ${Weather.RAIN}`,
  [Passive.SANDSTORM]: `Change weather to ${Weather.SANDSTORM}`,
  [Passive.MISTY]: `Change weather to ${Weather.MISTY}`,
  [Passive.SNOW]: `Change weather to ${Weather.SNOW}`,
  [Passive.STORM]: `Change weather to ${Weather.STORM}`,
  [Passive.NIGHT]: `Change weather to ${Weather.NIGHT}`,
  [Passive.WINDY]: `Change weather to ${Weather.WINDY}`,
  [Passive.AIRLOCK]: `Neutralize weather effects, getting back to ${Weather.NEUTRAL}`,
  [Passive.WURMPLE]: `Wurmple can evolve into Silcoon or Cascoon, depending on the weather at previous stage`,
  [Passive.HYDRATATION]: `${Synergy.GRASS} synergy is healing 5 additional ${Stat.HP} per second under the ${Weather.RAIN}`,
  [Passive.SHARED_VISION]: `Shared vision: all Pokemon with shared vision will attack the same target, if at range`,
  [Passive.WATER_SPRING]: `Whenever an enemy uses their ability, gain 5 ${Stat.MANA}`
}
