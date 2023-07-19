'use client'

import { Img } from "@/components/atoms/Img";
import React, { useMemo } from 'react';
import { useBreakpoint } from '@/utils/useBreakpoint';

interface RafaelSantanaPhotoInterface {
  className?: string
}

const RafaelSantanaPhoto: React.FC<RafaelSantanaPhotoInterface> = ({ className }) => {
  const breakpoint = useBreakpoint()

  const rafaelSantanaImageSize = useMemo(() => {
    const sizes = {
      'xl': 420,
      'lg': 380,
      'md': 340,
      'sm': 320,
      'xs': 300,
    }

    return sizes[breakpoint]
  }, [breakpoint])

  return (
    <Img 
      src="/assets/rafael-santana-foto2.png"
      alt="Imagem profissional de Rafael Sant'Ana"
      priority
      width={rafaelSantanaImageSize}
      height={rafaelSantanaImageSize}
      className={className}
    />
  )
}

export { RafaelSantanaPhoto }
