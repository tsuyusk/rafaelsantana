import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900">
      <div className="content flex items-center h-20">
        <Link className="text-gray-50" href='#'>Início</Link>
        <Link className="text-gray-50 ml-10" href='#'>Projetos</Link>
        <Link className="text-gray-50 ml-10" href='#'>Sobre Mim</Link>
        <Link className="text-gray-50 ml-10" href='#'>Depoimentos</Link>
      </div>
    </header>
  )
}
