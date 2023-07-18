'use client'
import { data } from "@/consts/data";
import React, { useCallback } from "react";
import { FaFile, FaLinkedin, FaGithub } from 'react-icons/fa'

export const SocialMediaButtons: React.FC = () => {
  const handleOpenLink = useCallback((link: string) => {
    window.open(link, 'blank')
  }, [])

  return (
    <>
      <button aria-label="Ir para Linkedin" onClick={() => handleOpenLink(data.linkedin)} className="hover:text-gray-700 duration-100 transition-all">
        <FaLinkedin size="56px"/>
      </button>

      <button aria-label="Ir para Github" onClick={() => handleOpenLink(data.github)} className="ml-4 hover:text-gray-700 duration-100 transition-all">
        <FaGithub size="56px"/>
      </button>

      <button aria-label="Ver Curriculo" onClick={() => handleOpenLink(data.cv)} className="ml-4 hover:text-gray-700 duration-100 transition-all">
        <FaFile size="56px"/>
      </button>
    </>
  );
}