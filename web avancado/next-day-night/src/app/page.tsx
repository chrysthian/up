"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import './page.css'

import { useDarkMode } from './state/darkModeState';

export default function Home() {
  const [flavors, setFlavors]= useState([]);
  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  }, [isDark]);

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!isDark) {
      const data = {
        id: "6646818941907520577d1973",
        name: "Framboesa",
      }

      fetch("http://localhost:4000/api/icecream/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          fetchData()
        })
    }
  }, [isDark])

  const displayFlavors = (flavors : any) : ReactNode => {
    const result : ReactNode[] = [];
    if(flavors && flavors.length > 0) {
      flavors.forEach((element: any) => {
        result.push(
          <div>{element.name}</div>
        )
      })  
    }
    return result;
  }

  const fetchData = async () => {
    await fetch('http://localhost:4000/api/icecream/query',
    {method: "GET"})
      .then((res) => res.json())
      .then((data) => {
        setFlavors(data);
      })  
  }

  return (
    <main>
      <Toggle />

      <div className='container'>
        <Window />
        <Window />
      </div>
      {displayFlavors(flavors)}
    </main>
  )
}
