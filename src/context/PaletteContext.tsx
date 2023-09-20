'use client'

import useColorPalette from '@/hooks/useColorPalette'
import { ReactNode, createContext, useContext } from 'react'

type PaletteProviderProps = {
  children: ReactNode
}

type PaletteContextType = {
  palette: string[]
  sourcePreview: string
  setPaletteSource: React.Dispatch<React.SetStateAction<File>>
  setPaletteSize: React.Dispatch<React.SetStateAction<number>>
}

const PaletteContext = createContext<PaletteContextType | null>(null)

export default function PaletteContextProvider({
  children,
}: PaletteProviderProps) {
  const { palette, sourcePreview, setPaletteSource, setPaletteSize } =
    useColorPalette() as PaletteContextType

  return (
    <PaletteContext.Provider
      value={{ palette, sourcePreview, setPaletteSource, setPaletteSize }}
    >
      {children}
    </PaletteContext.Provider>
  )
}

export function usePaletteContext(): PaletteContextType {
  const context = useContext(PaletteContext)
  if (!context)
    throw new Error('useColorPalette must be used within a PaletteContext')

  return context
}
