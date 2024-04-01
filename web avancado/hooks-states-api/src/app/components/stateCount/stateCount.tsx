"use client"
import React from "react"
import { useBearStore } from "../../state/bearState"
import "./stateCount.css"

export default function StateCount() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increase)

  return (
    <div className="state-counter">
      <h1>{bears}</h1>
      <button className="state-counter-button" onClick={() => increasePopulation(1)}>
        One up!
      </button>
    </div>
  )
}
