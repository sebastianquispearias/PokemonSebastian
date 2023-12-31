import { GameUser } from "../../models/colyseus-models/game-user"
import { Schema, MapSchema, type } from "@colyseus/schema"

export interface IPreparationState {
  users: MapSchema<GameUser>
  gameStarted: boolean
  ownerId: string
  ownerName: string
  name: string
}

export default class PreparationState
  extends Schema
  implements IPreparationState
{
  @type({ map: GameUser }) users = new MapSchema<GameUser>()
  @type("boolean") gameStarted: boolean
  @type("string") ownerId: string
  @type("string") ownerName: string
  @type("string") name: string
  @type("string") password: string | null
  @type("boolean") noElo: boolean

  constructor(ownerId: string | undefined, name: string) {
    super()
    this.ownerId = ownerId ? ownerId : ""
    this.name = name
    this.gameStarted = false
    this.ownerName = ""
    this.password = null
    this.noElo = false
  }
}
