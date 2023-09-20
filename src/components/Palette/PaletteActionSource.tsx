'use client'

import { usePaletteContext } from '@/context/PaletteContext'
import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type PaletteActionSourceProps = ComponentProps<'div'> & {
  icon?: ElementType
}

export default function PaletteActionSource({
  icon: Icon,
  className,
}: PaletteActionSourceProps) {
  const { setPaletteSource } = usePaletteContext()

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0]) return

    const file = event.target.files[0]
    setPaletteSource(file)
  }
  return (
    <div
      className={twMerge(
        'rounded-md bg-blue-600 text-base font-semibold',
        className,
      )}
    >
      <label
        htmlFor="file"
        className="flex items-center justify-center gap-2 p-3  text-zinc-50"
      >
        {Icon && <Icon />} Upload Image
      </label>
      <input type="file" id="file" hidden onInput={handleUploadImage} />
    </div>
  )
}
