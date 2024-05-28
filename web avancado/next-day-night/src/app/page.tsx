"use client"
import React, { useEffect } from 'react';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import './page.css'

import { useDarkMode } from './state/darkModeState';

export default function Home() {

  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  }, [isDark]);

  useEffect(() => {
    fetch('http://localhost:4000/api/icecream/getAll',
    {method: "GET"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }, [])

  return (
    <main>
      <Toggle />

      <div className='container'>
        <Window />
        <Window />
      </div>
    </main>
  )
}
