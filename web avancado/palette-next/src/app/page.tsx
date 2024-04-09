"use client"
import React, { useEffect } from "react"
import styles from "./page.module.css"

// color palette component
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/css"

//zustand
import { useColorStore } from "./state/colorState"

//quad
import Quad from "./components/quad"

export default function Home() {
  // estado global
  const primaryColor1Store = useColorStore((state) => state.primary1)
  const primaryColor2Store = useColorStore((state) => state.primary2)
  const primaryColor3Store = useColorStore((state) => state.primary3)
  const secondaryColorStore = useColorStore((state) => state.secondary)
  const accent1Store = useColorStore((state) => state.accent1)
  const accent2Store = useColorStore((state) => state.accent2)

  // estado local
  const [primaryColor1, setPrimaryColor1] = useColor(primaryColor1Store)
  const [primaryColor2, setPrimaryColor2] = useColor(primaryColor2Store)
  const [primaryColor3, setPrimaryColor3] = useColor(primaryColor3Store)
  const [secondaryColor, setSecondaryColor] = useColor(secondaryColorStore)
  const [accentColor1, setAccentColor1] = useColor(accent1Store)
  const [accentColor2, setAccentColor2] = useColor(accent2Store)

  // atualização do estado global
  const updatePrimaryColor1 = useColorStore((state) => state.updatePrimary1)
  const updatePrimaryColor2 = useColorStore((state) => state.updatePrimary2)
  const updatePrimaryColor3 = useColorStore((state) => state.updatePrimary3)
  const updateSecondaryColor = useColorStore((state) => state.updateSecondary)
  const updateAccentColor1 = useColorStore((state) => state.updateAccent1)
  const updateAccentColor2 = useColorStore((state) => state.updateAccent2)

  useEffect(() => {
    updatePrimaryColor1(primaryColor1.hex)
  }, [updatePrimaryColor1, primaryColor1])

  useEffect(() => {
    updatePrimaryColor2(primaryColor2.hex)
  }, [updatePrimaryColor2, primaryColor2])

  useEffect(() => {
    updatePrimaryColor3(primaryColor3.hex)
  }, [updatePrimaryColor3, primaryColor3])

  useEffect(() => {
    updateSecondaryColor(secondaryColor.hex)
  }, [updateSecondaryColor, secondaryColor])

  useEffect(() => {
    updateAccentColor1(accentColor1.hex)
  }, [updateAccentColor1, accentColor1])

  useEffect(() => {
    updateAccentColor2(accentColor2.hex)
  }, [updateAccentColor2, accentColor2])

  return (
    <main className={styles.main}>
      <div className="color-container">
        <ColorPicker hideInput={["hsv", "rgb"]} color={primaryColor1} onChange={setPrimaryColor1} />
        <ColorPicker hideInput={["hsv", "rgb"]} color={primaryColor2} onChange={setPrimaryColor2} />
        <ColorPicker hideInput={["hsv", "rgb"]} color={primaryColor3} onChange={setPrimaryColor3} />
        <ColorPicker hideInput={["hsv", "rgb"]} color={secondaryColor} onChange={setSecondaryColor} />
        <ColorPicker hideInput={["hsv", "rgb"]} color={accentColor1} onChange={setAccentColor1} />
        <ColorPicker hideInput={["hsv", "rgb"]} color={accentColor2} onChange={setAccentColor2} />
      </div>

      <div className="quad-container">
        <Quad
          backgroundColor={primaryColor1Store}
          textColor={primaryColor3Store}
          anchorColor={accent2Store}
          buttonColor={accent2Store}
          blobOneColor={primaryColor2Store}
          blobTwoColor={secondaryColorStore}
        />

        <Quad
          backgroundColor={primaryColor2Store}
          textColor={primaryColor3Store}
          anchorColor={accent2Store}
          buttonColor={accent2Store}
          blobOneColor={primaryColor1Store}
          blobTwoColor={secondaryColorStore}
        />

        <Quad
          backgroundColor={primaryColor3Store}
          textColor={primaryColor2Store}
          anchorColor={accent1Store}
          buttonColor={accent2Store}
          blobOneColor={secondaryColorStore}
          blobTwoColor={primaryColor2Store}
        />

        <Quad
          backgroundColor={secondaryColorStore}
          textColor={primaryColor2Store}
          anchorColor={accent1Store}
          buttonColor={accent1Store}
          blobOneColor={primaryColor3Store}
          blobTwoColor={primaryColor2Store}
        />
      </div>
    </main>
  )
}
