export function rgbToHex(rgb: string[]) {
  return (
    '#' +
    rgb
      .map((color) => {
        const hex = Number(color).toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}
