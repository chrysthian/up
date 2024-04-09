import { create } from 'zustand'

interface ColorState {
  primary1: string
  primary2: string
  primary3: string
  secondary: string
  accent1: string
  accent2: string
  
  updatePrimary1: (color: string) => void
  updatePrimary2: (color: string) => void
  updatePrimary3: (color: string) => void
  updateSecondary: (color: string) => void
  updateAccent1: (color: string) => void
  updateAccent2: (color: string) => void
}

export const useColorStore = create<ColorState>()(
    (set) => ({
      primary1: "#ffffff",
      primary2: "#fffdd0",
      primary3: "#000000",
      secondary: "#0000ff",
      accent1: "#ffc000",
      accent2: "#9a0a9a",

      updatePrimary1: (color) => set(() => ({ primary1: color })),
      updatePrimary2: (color) => set(() => ({ primary2: color })),
      updatePrimary3: (color) => set(() => ({ primary3: color })),
      updateSecondary: (color) => set(() => ({ secondary: color })),
      updateAccent1: (color) => set(() => ({ accent1: color })),
      updateAccent2: (color) => set(() => ({ accent2: color })),
    })
)