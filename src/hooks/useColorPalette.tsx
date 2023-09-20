'use client'
import { useState, useEffect } from 'react'
// @ts-expect-error This lib doesn't have @types/colorthief
import ColorThief from 'colorthief'
import { createFileFromStaticImage } from '@/utils'

export default function useColorPalette() {
  const [palette, setPalette] = useState<string[]>([])
  const [paletteSize, setPaletteSize] = useState<number>(6)
  const [paletteSource, setPaletteSource] = useState<File | null>()
  const [sourcePreview, setSourcePreview] = useState<string>('')

  useEffect(() => {
    const colorThief = new ColorThief()
    const fileReader = new FileReader()
    const image = new Image()

    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result as string | null

      if (result) {
        image.src = result
        image.onload = () => {
          setSourcePreview(result)
          setPalette(colorThief.getPalette(image, paletteSize))
          console.log(colorThief.getPalette(image, 5))
        }
      }
    }

    if (paletteSource) fileReader.readAsDataURL(paletteSource)
  }, [paletteSource, paletteSize])

  useEffect(() => {
    const staticImageData = { src: '/demo.webp', width: 100, height: 100 }
    setSourcePreview(staticImageData.src)
    createFileFromStaticImage(
      staticImageData,
      (file: File | null, error?: Error) => {
        if (error) {
          console.error('An error occurred:', error)
        } else {
          setPaletteSource(file)
        }
      },
    )
  }, [])

  return { palette, sourcePreview, setPaletteSource, setPaletteSize }
}
