import { ReactNode } from 'react'

type PaletteActionsType = {
  children: ReactNode
}

export default function PaletteActions({ children }: PaletteActionsType) {
  return <div className="flex flex-col gap-2">{children}</div>
}
