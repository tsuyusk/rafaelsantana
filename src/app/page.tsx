import csn from 'classnames'
import { FaFile } from 'react-icons/fa'

import { Img } from "@/components/atoms/Img";
import { Button } from "@/components/atoms/Button";
import { ScrollUpArrow } from "@/components/atoms/ScrollUpArrow";
import { RafaelSantanaPhoto } from '@/components/atoms/Rafaelsantanaphoto';

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Project } from "@/components/organisms/Project";

import { data } from '@/consts/data';

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />

        <section className="flex items-center" id="inicio">
          <div className="content flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center min-h-[720px]">
            <div>
              <h3 className="text-gray-400">Tudo que você precisa saber, de maneira rápida e objetiva.</h3>
              <div className="relative w-fit">
                <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold md:max-w-2xl w-fit">Olá, Eu sou <span className="whitespace-nowrap">Rafael Sant’Ana</span>,</h1>
                <Img className="absolute -bottom-5 -right-6 md:-right-3 lg:right-8 pointer-events-none select-none" src="/assets/risco-destaque.png" alt="Risco para destacar Rafael Sant'Ana" width={324} height={41} />
              </div>
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold md:max-w-2xl w-fit">Fullstack Developer <span className="text-theme-400">focado</span> em Backend.</h1>
            </div>

            <RafaelSantanaPhoto className="mb-4 lg:mb-0" />
          </div>
        </section>
        
        <section className="bg-slate-900 py-16" id="projetos">
          <header className="w-full flex justify-center">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-lg text-center">
              Aqui você encontra meus <span className="text-theme-400">projetos</span>.
            </h1>
          </header>

          <main className="flex flex-col flex-wrap items-center w-full content mt-24 lg:flex-row lg:justify-between">
            {data.projects.map((project, index) => (
              <Project key={project.title} project={project} className={csn(index === 2 ? 'mt-6 mx-auto' : 'mt-6 mx-auto lg:mt-0 lg:mx-0')} />
            ))}
            {/* <Project className="mt-6 mx-auto"/> */}
          </main>
        </section>

        <section id="sobremim">
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Conheça mais <span className="text-theme-400">sobre mim</span> e <span className="text-theme-400">minha trajetória na programação.</span>
            </h1>
          </header>

          <main className="flex flex-wrap lg:flex-nowrap lg:justify-between w-full content py-20 min-h-[720px]">
            <aside className="max-w-32 w-full">
              <h1 className="text-xl">
                Cientista da  <span className="text-complementaryTheme-400">Computação</span> na <span className="text-complementaryTheme-400">UFMG</span>, <br />
                <span className="text-complementaryTheme-400">Desenvolvedor</span> Web, <br />
                <span className="text-complementaryTheme-400">Fluente</span> em <span className="text-complementaryTheme-400">inglês</span> <br />
                e <span className="text-complementaryTheme-400">Autodidata</span>. <br />
              </h1>

              <h1 className="text-xl mt-7">Skills e Tecnologias</h1>

              <ul className="list-disc pl-8 mt-2">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>

                <li>
                  Maecenas velit nunc, venenatis vel malesuada ac, suscipit ut odio.
                </li>

                <li>
                  Pellentesque ultrices, lectus non tempor gravida, nisl nibh pharetra leo, in tristique justo velit a arcu.
                </li>

                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                </li>
              </ul>

              <ul className="flex flex-wrap ml-2 md:grid md:grid-cols-3 md:grid-rows-3 mt-14">
                {data.skills.map((skill) => (
                  <li className={csn("text-base flex mt-2 ")} key={skill.name}>
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
              <h1 className="text-xl mb-2">Titulo da seção</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit nunc, venenatis vel malesuada ac, suscipit ut odio. Pellentesque ultrices, lectus non tempor gravida, nisl nibh pharetra leo, in tristique justo velit a arcu. Quisque non urna facilisis, imperdiet elit non, feugiat tortor. Nulla tincidunt arcu nec dolor aliquet, vitae semper nisi semper. Integer nec mi aliquam, tristique nibh in, venenatis ex. Donec ut faucibus turpis, ut tristique metus. Aenean ac velit in velit vestibulum tempor in id neque. Pellentesque sed convallis enim. Etiam malesuada congue nisl, vitae bibendum sapien maximus et. Aliquam vestibulum libero in consequat elementum. Proin hendrerit posuere ligula <br />
                <br />
                vitae bibendum sapien maximus et. Aliquam vestibulum libero in consequat elementum. Proin hendrerit posuere ligula <br />
                <br />
                vitae bibendum sapien maximus et. Aliquam vestibulum libero in consequat elementum. Proin hendrerit posuere ligula vitae bibendum sapien maximus et. Aliquam vestibulum libero<br />
              </p>
            </main>
          </main>
        </section>

        <section id="depoimentos">
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Escute o que <span className="text-theme-400">outras pessoas</span> que <span className="text-theme-400">trabalharam comigo</span> têm a dizer.
            </h1>
          </header>

          <main className="w-full py-16 content">
            <div className="flex flex-wrap md:flex-nowrap justify-center max-w-[1120px] overflow-hidden">
              {data.coworkers.map((coworker, index) => (
                <div className={csn("flex justify-between flex-col items-center w-[302px]", index > 0 && 'mt-8 sm:ml-3 md:ml-6 lg:mt-0 lg:ml-10')} key={coworker.name}>
                  <Img
                    src={coworker.image}
                    alt={coworker.name}
                    width={180}
                    height={180}
                    className="rounded-full"
                  />
  
                  <span className="opacity-60">Co-Worker da <span className={`text-[${coworker.color}]`}>{coworker.company}</span></span>
  
                  <h1>{coworker.name}</h1>
  
                  <p className="max-w-[302px] w-full text-justify">
                    {coworker.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </section>

        <section className="bg-theme-400 flex" id="curriculo">
          <div className="flex flex-col justify-center items-center h-[640px] w-full content">
            <h1 className="text-slate-50 text-[24px] md:text-[30px] lg:text-[40px] mb-12">Gostou do que viu?</h1>

            <Button size="lg" iconRight={<FaFile />}>Baixe meu curriculo</Button>
          </div>
        </section>

        <Footer />
        <ScrollUpArrow />
      </div>
    </>
  )
}

