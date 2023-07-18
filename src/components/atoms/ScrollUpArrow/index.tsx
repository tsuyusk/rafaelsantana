'use client'

import { FaArrowUp } from 'react-icons/fa'

export const ScrollUpArrow: React.FC = () => {
  return (
    <button 
      aria-label="Voltar para o inicio da página"
      onClick={() => document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })}
      className="flex items-center justify-center rounded-full w-12 h-12 bg-complementaryTheme-400 absolute bottom-8 right-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]"
    >
      <FaArrowUp color="#fff" size="24px" />
    </button>
  )
}