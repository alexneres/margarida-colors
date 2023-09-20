import { StaticImageData } from 'next/image'

export default function createFileFromStaticImage(
  staticImageData: StaticImageData,
  callback: (file: File | null, error?: Error) => void,
) {
  const imageUrl = staticImageData.src

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const file = new File([blob], 'image.png', { type: blob.type })

      callback(file)
    })
    .catch((error) => {
      console.error('Error fetching the image:', error)
      callback(null, error)
    })
}
