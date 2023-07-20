import { Fragment } from 'react'
import * as Separator from '@radix-ui/react-separator';
import csn from 'classnames'

import { Img } from "@/components/atoms/Img";
import { ScrollUpArrow } from "@/components/atoms/ScrollUpArrow";
import { RafaelSantanaPhoto } from '@/components/atoms/Rafaelsantanaphoto';

import { Header } from "@/components/organisms/Header";
import { SocialMediaButtons } from "@/components/organisms/SocialMediaButtons";
import { Project } from "@/components/organisms/Project";
import { Footer } from "@/components/organisms/Footer";

import { data } from '@/consts/data';
import { OpenCVButton } from '@/components/organisms/OpenCvButton';
import { FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="bg-white w-full h-full flex flex-col">
        <Header />

        <section className="flex items-center px-4" id="inicio">
          <div className="content flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center min-h-[720px]">
            <div>
              <h3 className="text-gray-700">Tudo que você precisa saber, de maneira rápida e objetiva.</h3>
              <div className="relative w-fit">
                <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold md:max-w-2xl w-fit">
                  Olá, Eu sou {' '}
                  <span className="relative w-fit">
                    <span className="whitespace-nowrap">Rafael Sant{'’'}Ana</span>
                    <Img className="absolute -bottom-5 -right-0 md:-right-3 lg:right-8 pointer-events-none select-none" src="/assets/risco-destaque.png" alt="Risco para destacar Rafael Sant'Ana" width={324} height={41} />
                  </span>,
                </h1>
              </div>
              <h1 className="mb-4 text-[28px] md:text-[32px] lg:text-[40px] font-bold md:max-w-2xl w-fit">Fullstack Developer <span className="text-theme-400">focado</span> em Backend.</h1>

              <SocialMediaButtons />
            </div>

            <RafaelSantanaPhoto className="mb-4 lg:mb-0" />
          </div>
        </section>
        
        <section className="bg-slate-900 py-16 px-4" id="projetos">
          <header className="w-full flex justify-center">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-lg text-center">
              Aqui você encontra meus <span className="text-theme-400">projetos</span> de maior <span className="text-theme-400">destaque</span>.
            </h1>
          </header>

          <main className="flex flex-col flex-wrap items-center w-full content mt-24 lg:flex-row lg:justify-between">
            {data.projects.map((project, index) => (
              <Project key={project.title} project={project} className={csn(index === 2 ? 'mt-20 mx-auto' : 'mt-20 mx-auto')} />
            ))}
            {/* <Project className="mt-6 mx-auto"/> */}
          </main>
        </section>

        <section id="sobremim">
          <header className="w-full flex justify-center bg-slate-900 py-16 px-4">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Conheça mais <span className="text-theme-400">sobre mim</span> e <span className="text-theme-400">minha trajetória na programação.</span>
            </h1>
          </header>

          <main className="flex flex-wrap lg:flex-nowrap lg:justify-between w-full content py-20 min-h-[720px]">
            <aside className="max-w-32 w-full">
              <h1 className="text-xl">
                Cientista da  <span className="text-complementaryTheme-400">Computação</span> na <span className="text-complementaryTheme-400">UFMG</span>, <br />
                <span className="text-complementaryTheme-400">Desenvolvedor</span> Web e<br />
                <span className="text-complementaryTheme-400">Fluente</span> em <span className="text-complementaryTheme-400">inglês</span> <br />
              </h1>

              <h1 className="text-xl mt-7">Skills e Tecnologias</h1>

              <ul className="list-disc pl-8 mt-2">
                <li>
                  No <strong>Backend</strong>, possuo <strong>experiência</strong> com diversos tipos de tecnologias, como bancos de dados relacionais e não relacionais, Rest Apis, GraphQL, TRPc e muito mais.
                </li>

                <li className="mt-4">
                  <strong>Frontend</strong> experiente em <strong>React e seus frameworks, como Next.js</strong>. Tenho habilidade em criar interfaces interativas e responsivas. Escrevo código limpo, modular e bem documentado, facilitando colaboração em equipe.
                </li>
              </ul>

              <ul className="flex flex-wrap ml-2 md:grid md:grid-cols-3 md:grid-rows-3 mt-14">
                {data.skills.map((skill) => (
                  <li className={csn("text-base items-center flex mt-2 ml-2")} key={skill.name}>
                    <span className="font-medium mr-2">{skill.name}</span>

                    <Img
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                    />
                  </li>
                ))}
              </ul>
            </aside>

            <main className="mt-8 lg:mt-0 lg:ml-40 w-full">
              <h1 className="text-xl mb-4">Um pouco mais sobre <span className="text-complementaryTheme-400">minha história com</span> a <span className="text-complementaryTheme-400">Computação</span></h1>

              <ul className="list-disc pl-8">
                <li>Fascínio pela computação e tecnologia <strong>desde a infância</strong>.</li>
                <li><strong>Estudante de Ciência da Computação na UFMG</strong>, buscando uma visão mais ampla da área.</li>
                <li>
                  <strong>Projetos</strong> mais relevantes:
                  <ul className="list-disc pl-8">
                    <li>
                      <strong>NeedU</strong>: Premiado como TCC do ano na PUC Campinas
                    </li>
                    <li>
                      <strong>Swanted</strong>: Primeira experiência profissional com uma empresa internacional
                    </li>
                    <li>
                    <strong>AgendaFy</strong>: Primeiro aplicativo próprio com clientes pagantes reais e recorrentes. 
                    </li>
                  </ul>
                </li>
                <li><strong>Foco atual</strong> em masterizar o desenvolvimento de websites e aplicativos com as melhores técnicas para <strong>aumentar as taxas de retenção de clientes</strong>.</li>
                <li>Ocupando o cargo de CTO na startup <strong>AgendaFy</strong>, <strong>liderando a organização do projeto</strong> e orientando outros programadores.</li>
                <li>Interesses em explorar áreas como Bioinformática e Inteligência Artificial, buscando expandir horizontes no meio acadêmico.</li>
              </ul>
            </main>
          </main>
        </section>

        <section id="depoimentos">
          <header className="w-full flex justify-center bg-slate-900 py-16 px-4">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Escute o que <span className="text-theme-400">outras pessoas</span> que <span className="text-theme-400">trabalharam comigo</span> têm a dizer.
            </h1>
          </header>

          <main className="w-full py-16 content">
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-[1120px] overflow-hidden">
              {data.coworkers.map((coworker, index) => (
                <Fragment key={coworker.name}>
                  <div className={csn("flex flex-col items-center w-[302px]", index > 0 && 'mt-8 sm:ml-3 md:ml-6 lg:mt-0 lg:ml-10')}>
                    <Img
                      src={coworker.image}
                      alt={coworker.name}
                      width={180}
                      height={180}
                      className="rounded-full"
                    />
    
                    <a aria-label="Ir para Linkedin" href={coworker.linkedin} target='_blank' className="hover:text-gray-700 duration-100 transition-all my-2">
                      <FaLinkedin size="18px"/>
                    </a>

                    <span className="mb-2 text-gray-600">{coworker.company}</span>
    
                    <h1 className="mb-2">{coworker.name}</h1>
    
                    <p className="max-w-[302px] w-full text-start">
                      {coworker.testimonial}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </main>
        </section>

        <section className="bg-theme-400 flex px-4" id="curriculo">
          <div className="flex flex-col justify-center items-center h-[640px] w-full content">
            <h1 className="text-slate-50 text-center text-[24px] md:text-[30px] lg:text-[40px] mb-12">Gostou do que viu?</h1>

            <OpenCVButton />
          </div>
        </section>

        <Footer />
        <ScrollUpArrow />
      </div>
    </>
  )
}

