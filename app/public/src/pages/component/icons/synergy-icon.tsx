import React from "react"
import { Synergy } from "../../../../../types/enum/Synergy"
import "./synergy-icon.css"

export default function SynergyIcon(props: { type: Synergy; size?: string }) {
  return (
    <img
      src={"assets/types/" + props.type + ".svg"}
      alt={props.type}
      title={props.type}
      className="synergy-icon"
      style={{
        width: props.size ?? "40px",
        height: props.size ?? "40px"
      }}
    />
  )
}
