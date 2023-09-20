'use client'

import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type PaletteColorProps = ComponentProps<'li'> & {
  hex: string
}

export default function PaletteColor({
  className,
  hex,
  ...props
}: PaletteColorProps) {
  const [isHover, setIsHover] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    const tempTextarea = document.createElement('textarea')
    tempTextarea.value = hex
    document.body.appendChild(tempTextarea)
    tempTextarea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextarea)
    setClicked(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
    setClicked(false)
  }

  return (
    <li
      className={twMerge(
        'relative flex h-full flex-grow cursor-pointer items-center justify-center',
        className,
      )}
      style={{ backgroundColor: hex }}
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isHover && (
        <span
          data-copied={clicked}
          className="absolute h-3 w-3 rounded-full border-[1.5px] border-zinc-700 bg-zinc-400 focus:bg-zinc-50 data-[copied=true]:bg-zinc-50"
        ></span>
      )}
      {isHover && (
        <span className="absolute h-2 w-2 rounded-full bg-zinc-300"></span>
      )}
      {isHover && (
        <div className="absolute">
          <span
            data-copied={clicked}
            className="relative -bottom-12 rounded-lg bg-zinc-900 p-2 text-xs text-zinc-50 data-[copied=true]:bg-green-500"
          >
            {clicked ? 'Copied' : hex}
          </span>
        </div>
      )}
      {/* {isHover && (
        <span
          data-click={clicked}
          className=" h-3 w-3 rounded-full border-[1.5px] border-zinc-700 bg-zinc-400 data-[click=true]:bg-zinc-200"
        ></span>
      )}

      {isHover && (
        <div className="absolute">
          <span
            data-copied={clicked}
            className="relative -bottom-12 rounded-lg bg-zinc-900 p-2 text-xs text-zinc-50 data-[copied=true]:bg-green-500"
          >
            {clicked ? 'Copied' : hex}
          </span>
        </div>
      )} */}
    </li>
  )
}
