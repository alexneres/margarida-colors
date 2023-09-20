'use client'

import { usePaletteContext } from '@/context/PaletteContext'
import { rgbToHex } from '@/utils'
import { Minus, Plus } from 'lucide-react'
import PaletteColor from './PaletteColor'

export default function PaletteColors() {
  const { palette, setPaletteSize } = usePaletteContext()

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <ul className="flex h-11 w-80">
          {palette.map((color) => {
            const hex = rgbToHex(Object.values(color))
            return <PaletteColor key={hex} hex={hex} />
          })}
        </ul>

        <div className="flex flex-col">
          <button
            className="rounded-t-md border-[1px] border-zinc-300 hover:border-zinc-400"
            onClick={() =>
              setPaletteSize((prev: number) => (prev < 10 ? prev + 1 : prev))
            }
          >
            <Plus width={20} height={20} />
          </button>
          <button
            className="rounded-b-md border-[1px] border-zinc-300 hover:border-zinc-400"
            onClick={() =>
              setPaletteSize((prev: number) => (prev > 2 ? prev - 1 : prev))
            }
          >
            <Minus width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
