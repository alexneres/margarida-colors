'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Code, Image as ImageIcon, Newspaper, Shapes } from 'lucide-react'

export default function PaletteActionUpload() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={'lg'}
          className="border-blue-600 text-base font-semibold text-blue-600 hover:text-blue-500"
        >
          Export Palette
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle>Export Palette</DialogTitle>
            <DialogDescription>
              This is a project; it&apos;s not finished yet, and these options
              are not available at this moment.
            </DialogDescription>
          </DialogHeader>

          <ul className="mt-5 flex w-full items-center justify-center gap-3">
            <li className="pointer-events-none flex w-20  cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-zinc-100 py-5 text-sm font-semibold text-zinc-400">
              <ImageIcon />
              <span>Image</span>
            </li>

            <li className="pointer-events-none flex w-20  cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-zinc-100 py-5 text-sm font-semibold text-zinc-400">
              <Code />
              <span>CSS</span>
            </li>

            <li className="pointer-events-none flex w-20  cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-zinc-100 py-5 text-sm font-semibold text-zinc-400">
              <Newspaper />
              <span>PDF</span>
            </li>

            <li className="pointer-events-none flex w-20  cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-zinc-100 py-5 text-sm font-semibold text-zinc-400">
              <Shapes />
              <span>SVG</span>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
