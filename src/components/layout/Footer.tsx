import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'footer'>

export default function Footer({ className, ...props }: Props) {
  return (
    <footer
      className={twMerge('bg-zinc-50 p-4', className)}
      {...props}
    ></footer>
  )
}
