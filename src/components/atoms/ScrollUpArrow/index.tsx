'use client'

import { FaArrowUp } from 'react-icons/fa'

export const ScrollUpArrow: React.FC = () => {
  return (
    <button 
      onClick={() => document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' })}
      className="flex items-center justify-center rounded-full w-12 h-12 bg-complementaryTheme-400 absolute bottom-8 right-8 shadow-2xl"
    >
      <FaArrowUp color="#fff" size="24px" />
    </button>
  )
}