import React from 'react'
import Image, { ImageProps } from 'next/image'

type ImgProps = ImageProps

export const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => {
  return (
    <Image src={src} alt={alt} {...props} />
  )
}
