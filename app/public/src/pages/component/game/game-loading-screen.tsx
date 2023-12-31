import React, { useState } from "react"
import GamePlayerLoading from "./game-player-loading"
import { useAppSelector } from "../../../hooks"
import { getGameScene } from "../../game"
import "./game-loading-screen.css"
import { Navigate } from "react-router"

export default function GameLoadingScreen(props: { connectError: string }) {
  const players = useAppSelector((state) => state.game.players)
  const currentPlayerId = useAppSelector((state) => state.network.uid)
  const progress = players.find(
    (p) => p.id === currentPlayerId
  )?.loadingProgress
  const statusMessage = getGameScene()?.loadingManager?.statusMessage
  const [toAuth, setToAuth] = useState<boolean>(false)

  if (toAuth) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="game-loading-screen">
      <ul className="game-players-loading">
        {players.map((p, i) => {
          const x = (0.2 + (i % 4) * 0.2) * 100
          const y = (i < 4 ? 0.2 : 0.8) * 100
          return (
            <li
              style={{ position: "absolute", top: `${y}%`, left: `${x}%` }}
              key={"game-player-loading-" + p.id}
            >
              <GamePlayerLoading player={p} />
            </li>
          )
        })}
      </ul>
      <div className="loading-bar">
        <progress
          className="nes-progress"
          value={progress}
          max="100"
        ></progress>
        <p id="status-message">{statusMessage}</p>
        {props.connectError && <>
          <p className="error">{props.connectError}</p>
          <button onClick={() => setToAuth(true)} className="bubbly blue">
            Back to Lobby
          </button>
        </>}
      </div>
      <footer>
        Players disconnected for more than 3 minutes are kicked out of the
        game. Game will start after 5 minutes max of loading no matter what.
      </footer>
    </div>
  )
}
