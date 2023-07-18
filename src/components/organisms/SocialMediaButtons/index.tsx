'use client'
import { data } from "@/consts/data";
import React, { useCallback } from "react";
import { FaFile, FaLinkedin, FaGithub } from 'react-icons/fa'

export const SocialMediaButtons: React.FC = () => {

  return (
    <div className="flex">
      <a aria-label="Ir para Linkedin" target="_blank" href={data.linkedin} className="hover:text-gray-700 duration-100 transition-all">
        <FaLinkedin size="56px"/>
      </a>

      <a aria-label="Ir para Github" target="_blank" href={data.github} className="ml-4 hover:text-gray-700 duration-100 transition-all">
        <FaGithub size="56px"/>
      </a>

      <a aria-label="Ver Curriculo" target="_blank" href={data.cv} className="ml-4 hover:text-gray-700 duration-100 transition-all">
        <FaFile size="56px"/>
      </a>
    </div>
  );
}