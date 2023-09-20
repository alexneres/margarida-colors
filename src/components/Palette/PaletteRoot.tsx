import { ReactNode } from 'react'

type PaletteRootType = {
  children: ReactNode
}

export default function PaletteRoot({ children }: PaletteRootType) {
  return <div className="flex items-center justify-center">{children}</div>
}
