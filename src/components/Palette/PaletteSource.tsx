'use client'

import { usePaletteContext } from '@/context/PaletteContext'

import Image from 'next/image'

export default function PaletteSource() {
  const { sourcePreview } = usePaletteContext()

  if (!sourcePreview) return

  return (
    <div className="flex h-[28.25rem] w-[41.125rem] items-center justify-center bg-zinc-100   ">
      <Image
        className="h-full w-full object-contain"
        src={sourcePreview}
        width={658}
        height={452}
        alt="image"
        priority={true}
      />
    </div>
  )
}
