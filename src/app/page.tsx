import csn from 'classnames'
import { FaFile } from 'react-icons/fa'

import { Img } from "@/components/atoms/Img";
import { Button } from "@/components/atoms/Button";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Project } from "@/components/organisms/Project";
import { data } from '@/consts/data';

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />

        <section className="flex items-center">
          <div className="content flex justify-between items-center h-[720px]">
            <div>
              <h3 className="text-gray-400">Tudo que você precisa saber, de maneira rápida e objetiva.</h3>
              <div className="relative w-fit">
                <h1 className="text-[40px] font-bold max-w-2xl w-fit">Olá, Eu sou Rafael Sant’Ana,</h1>
                <Img className="absolute -bottom-5 right-8 pointer-events-none select-none" src="/assets/risco-destaque.png" alt="Risco para destacar Rafael Sant'Ana" width={324} height={41} />
              </div>
              <h1 className="text-[40px] font-bold max-w-2xl w-fit">Fullstack Developer <span className="text-theme-400">focado</span> em Backend.</h1>
            </div>

            <Img src="/assets/rafael-santana-foto1.png" alt="Imagem profissional de Rafael Sant'Ana" width={420} height={420} />
          </div>
        </section>
        
        <section className="bg-slate-900 py-16">
          <header className="w-full flex justify-center">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-lg text-center">
              Aqui você encontra meus <span className="text-theme-400">projetos</span>.
            </h1>
          </header>

          <main className="flex flex-wrap items-center justify-between content mt-24">
            {data.projects.map((project, index) => (
              <Project key={project.title} project={project} className={csn(index === 2 && 'mt-6 mx-auto')} />
            ))}
            {/* <Project className="mt-6 mx-auto"/> */}
          </main>
        </section>

        <section>
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Conheça mais <span className="text-theme-400">sobre mim</span> e <span className="text-theme-400">minha trajetória na programação.</span>
            </h1>
          </header>

          <main className="flex justify-between w-full content pt-20 h-[720px]">
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

              <ul className="grid grid-cols-3 grid-rows-3 mt-14">
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

            <main className="ml-40 w-full ">
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

        <section>
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Escute o que <span className="text-theme-400">outras pessoas</span> que <span className="text-theme-400">trabalharam comigo</span> têm a dizer.
            </h1>
          </header>

          <main className="w-full py-32 content">
            <div className="flex justify-center max-w-[1120px] overflow-hidden">
              {data.coworkers.map((coworker, index) => (
                <div className={csn("flex justify-between flex-col items-center w-[302px]", index > 0 && 'ml-10')} key={coworker.name}>
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

        <section className="bg-theme-400 flex">
          <div className="flex flex-col justify-center items-center h-[640px] w-full">
            <h1 className="text-slate-50 text-[40px] mb-12">Gostou do que viu ?</h1>

            <Button size="lg" iconRight={<FaFile />}>Baixe meu curriculo</Button>
          </div>
        </section>

        <Footer />
      </div>

      
    </>
  )
}
