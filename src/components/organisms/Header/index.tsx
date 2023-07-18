'use client'
import React, { useCallback } from 'react'

export const Header: React.FC = () => { 
  const handleGoToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)

    console.log(element?.offsetTop)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  
  return (
    <header id="header" className="w-full bg-slate-900">
      <div className="content flex items-center h-20">
        <button onClick={() => handleGoToSection('inicio')} className="text-gray-50 hover:text-gray-400 duration-200 transition-all border-0 bg-transparent">Início</button>
        <button onClick={() => handleGoToSection('projetos')} className="text-gray-50 hover:text-gray-400 duration-200 transition-all ml-10 border-0 bg-transparent">Projetos</button>
        <button onClick={() => handleGoToSection('sobremim')} className="text-gray-50 hover:text-gray-400 duration-200 transition-all ml-10 border-0 bg-transparent">Sobre Mim</button>
        <button onClick={() => handleGoToSection('depoimentos')} className="text-gray-50 hover:text-gray-400 duration-200 transition-all ml-10 border-0 bg-transparent">Depoimentos</button>
        <button onClick={() => handleGoToSection('curriculo')} className="text-gray-50 hover:text-gray-400 duration-200 transition-all ml-10 border-0 bg-transparent">Curriculo</button>
      </div>
    </header>
  )
}
