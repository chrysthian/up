"use client"
import React, { ReactNode } from "react"

interface ColorComposition {
  backgroundColor: string
  textColor: string
  anchorColor: string
  buttonColor: string
  blobOneColor: string
  blobTwoColor: string
}

export default function Quad(colors: ColorComposition): ReactNode {
  return (
    <div
      className="quad"
      style={{
        backgroundColor: colors.backgroundColor,
        color: colors.textColor,
      }}
    >
      <div className="quad-content">
        <h1>Takoyaki</h1>

        <a style={{ color: colors.anchorColor }} href="https://github.com/chrysthian/up">
          Github.com
        </a>

        <button style={{ backgroundColor: colors.buttonColor }}></button>

        <div className="blob-1" style={{ backgroundColor: colors.blobOneColor }}></div>
        <div className="blob-2" style={{ backgroundColor: colors.blobTwoColor }}></div>
      </div>
    </div>
  )
}
