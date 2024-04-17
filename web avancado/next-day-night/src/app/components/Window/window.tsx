"use client"
import React, { ReactNode } from "react"
import "./window.css"

const Window = (): ReactNode => {  
  // const backgorundColor = isDark ? "#0e4a66" : "#0e4aaa"
  // const textColor = isDark ? "#ffff00" : "#ffffff"

  return (
    <div className="window">
      <button className="window-button">
        Open/Close
      </button>
    </div>
  )
}

export default Window