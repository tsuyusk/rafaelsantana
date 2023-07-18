import { Img } from '@/components/atoms/Img'
import React from 'react'
import csn from 'classnames'

interface ProjectProps {
  className?: string
  project: Models.IProject
}

export const Project: React.FC<ProjectProps> = ({ className, project }) => {
  return (
    <div className={csn("flex-shrink-0 flex flex-col items-center text-white", className)}>
      <h2 className="text-xl text-center mb-4 opacity-95">{project.type}</h2>
      <h1 style={{ color: project.color }} className={csn("text-4xl")}>{project.title}</h1>
      <div className="flex flex-col md:flex-row mt-3">
        <div className="flex flex-col items-center">
          <Img 
            src={project.image}
            alt="Swanted"
            className="object-contain object-center"
            width={324}
            height={428}
          />

          <a className="mt-2 text-center text-blue-400 hover:text-blue-500 duration-200 transition-all" href={project.link} target='_blank'>Ver Mais sobre o Projeto</a>
        </div>

        <div className="flex flex-col mt-2 md:mt-0 md:ml-2">
          <h1 className="text-xl text-center md:text-start">Principais <span style={{ color: project.color }}>habilidades</span> <br /> usadas</h1>

          <ul className="flex flex-col items-center md:items-start font-normal mt-4">
            {project.skills.map(skill => (
              <li className=" flex mt-2" key={skill.name}>
                <span className="mr-2">{skill.name}</span>

                <Img
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
