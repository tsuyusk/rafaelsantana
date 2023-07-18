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
      <h4 className="text-xl">Cliente Real</h4>
      <h1 className={csn(`text-[${project.color}]`, "text-4xl")}>{project.title}</h1>
      <div className="flex mt-3">
        <Img 
          src="https://user-images.githubusercontent.com/42506001/221354918-01bf0e89-48be-4df7-85bb-cdf5d0136f2a.png"
          alt="Swanted"
          width={294}
          height={388}
        />

        <div className="flex flex-col ml-2">
          <h1 className="text-xl">Principais <span className={`text-[${project.color}]`}>habilidades</span> <br /> usadas</h1>

          <ul className="font-normal mt-4">
            {project.skills.map(skill => (
              <li className="flex mt-2" key={skill.name}>
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
