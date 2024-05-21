import React, { ReactElement, useEffect } from "react"
import Toggle from "../../components/Toggle"
import Window from "../../components/Window"
import "./Hooks.css"
import { useDarkMode } from "../../store/darkModeStore"

const HooksPage = (): ReactElement => {
  const isDark = useDarkMode((state) => {
    return state.dark
  })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff"
  }, [isDark])

  return (
    <div className="page">
      <Toggle />

      <div className="container">
        <Window />
        <Window />
      </div>
    </div>
  )
}

export default HooksPage
