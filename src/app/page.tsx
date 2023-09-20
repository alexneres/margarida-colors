import { Palette } from '@/components/Palette'
import PaletteActionSource from '@/components/Palette/PaletteActionSource'
import PaletteActionUpload from '@/components/Palette/PaletteActionUpload'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Palette.Root>
        <Palette.Control>
          <Palette.Colors />
          <Palette.Actions>
            <PaletteActionSource />
            <PaletteActionUpload />
          </Palette.Actions>
        </Palette.Control>

        <Palette.Source />
      </Palette.Root>
    </main>
  )
}
