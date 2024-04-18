"use client"
import React from "react"
import "./toggle.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { useDarkMode } from "@/app/state/darkModeState";

const Toggle = () => {

  const changeState = useDarkMode((state) => { return state.change })

  return (
    <div id="darkmode">
      <input type="checkbox" className="checkbox" id="checkbox" onChange={() => { changeState() }} />
      <label htmlFor="checkbox" className="label">
        <LightModeIcon htmlColor="white" sx={{ fontSize: "12px" }} />
        <ModeNightIcon htmlColor="yellow" sx={{ fontSize: "12px" }} />
        <div className="ball"></div>
      </label>
    </div>
  )
}

export default Toggle;