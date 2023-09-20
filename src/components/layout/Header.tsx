import Image from 'next/image'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'header'>

export default function Header({ className, ...props }: Props) {
  return (
    <header
      className={twMerge('bg-zinc-50 py-4 text-zinc-950 shadow-sm', className)}
      {...props}
    >
      <div className="container flex items-center justify-between">
        <Link href={'/'} className="cursor-pointer">
          <Image src={'/logo.svg'} alt="" width={40} height={40} />
        </Link>

        <span></span>
      </div>
    </header>
  )
}
