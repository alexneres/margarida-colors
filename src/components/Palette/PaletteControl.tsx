import { ReactNode } from 'react'

type PaletteControlType = {
  children: ReactNode
}

export default function PaletteControl({ children }: PaletteControlType) {
  return (
    <div className="flex h-[28.25rem] flex-col justify-between border-r-2 border-zinc-200 bg-zinc-50 p-8">
      {children}
    </div>
  )
}
