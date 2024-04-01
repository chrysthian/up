"use client"
import React, { useState, useEffect } from "react"
import "./hookCount.css"

export default function HookCountEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 3) {
      console.log("A contagem está maior que 3")
    }
  }, [count])

  return (
    <div className="hook-counter-effect">
      <h1>{count}</h1>
      <button className="hook-counter-button" onClick={() => setCount(count + 1)}>
        One up!
      </button>
    </div>
  )
}
