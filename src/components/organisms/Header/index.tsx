'use client'
import React, { useCallback } from 'react'
import csn from 'classnames'
import { FaBars } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';

export const Header: React.FC = () => { 
 
  return (
    <header id="header" className="w-full bg-slate-900 px-4">
      <div className="text-gray-50 hidden content md:flex items-center h-20">
        <SectionButton className="hover:text-gray-400" id="inicio">Início</SectionButton>
        <SectionButton className="hover:text-gray-400" id="projetos">Projetos</SectionButton>
        <SectionButton className="hover:text-gray-400" id="sobremim">Sobre Mim</SectionButton>
        <SectionButton className="hover:text-gray-400" id="depoimentos">Depoimentos</SectionButton>
        <SectionButton className="hover:text-gray-400" id="curriculo">Curriculo</SectionButton>
      </div>

      <div className="flex ml-auto content md:hidden items-center h-20">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button aria-label="Abrir Menu lateral" className="text-gray-50 hover:text-gray-400 duration-200 transition-all border-0 bg-transparent">
              <FaBars size="32px" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-[#11111150] data-[state=open]:animate-overlayShow fixed inset-0" />

            <Dialog.Content className="flex flex-col data-[state=open]:animate-contentShow items-start fixed top-0 bottom-0 right-0 w-[70vw] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Close asChild>
                <button 
                  className="duration-200 transition-all border-0 bg-transparent mb-2"
                >
                  <FiX size="32px" />
                </button>
              </Dialog.Close>

              <Dialog.Title>
                Navegação
              </Dialog.Title>
              <Dialog.Description>
                Aqui você pode navegar entre todas as seções de meu portfólio
              </Dialog.Description>

              <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />

              <SectionButton id="inicio">Início</SectionButton>
              <SectionButton id="projetos">Projetos</SectionButton>
              <SectionButton id="sobremim">Sobre Mim</SectionButton>
              <SectionButton id="depoimentos">Depoimentos</SectionButton>
              <SectionButton id="curriculo">Curriculo</SectionButton>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}

interface SectionButtonProps {
  id: string
  className?: string
  children: React.ReactNode
}

function SectionButton({ id, children, className }: SectionButtonProps) {
  const handleGoToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <button onClick={() => handleGoToSection(id)} className={csn("duration-200 transition-all border-0 bg-transparent mt-2 md:mt-0 md:mr-4", className)}>{children}</button>    
  )
}
