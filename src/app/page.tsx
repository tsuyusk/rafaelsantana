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
                <span className="text-complementaryTheme-400">Desenvolvedor</span> Web, <br />
                <span className="text-complementaryTheme-400">Fluente</span> em <span className="text-complementaryTheme-400">inglês</span> <br />
                e <span className="text-complementaryTheme-400">Autodidata</span>. <br />
              </h1>

              <h1 className="text-xl mt-7">Skills e Tecnologias</h1>

              <ul className="list-disc pl-8 mt-2">
                <li>
                  Em Backend, possuo um amplo conhecimento dos conceitos fundamentais, como o funcionamento do protocolo HTTP, entre outros. Além disso, destaco-me por minha habilidade excepcional em desenvolver sistemas complexos, tanto em arquiteturas monolíticas quanto em microsserviços. Tenho experiência sólida com bancos de dados, tanto relacionais quanto não relacionais, e estou familiarizado com a implementação de graphql, rest APIs e tRPC. Acredito que minha sólida base teórica e minha habilidade comprovada em desenvolver sistemas robustos foram um grande diferencial para agregar valor a todos os projetos em que participei e também um grande diferencial para todos os projetos que participarei.
                </li>

                <li className="mt-4">
                  No Frontend, possuo um profundo entendimento dos conceitos relacionados ao React e seus frameworks, e tenho ampla experiência em HTML, CSS e Javascript. Ao longo da minha jornada profissional, desenvolvi habilidades excepcionais na utilização do React e de suas ferramentas complementares. Tenho facilidade em criar interfaces responsivas e interativas, além de implementar soluções criativas para desafios complexos. Meu domínio em HTML, CSS e Javascript é uma base sólida que me permite construir aplicações web envolventes e de alta qualidade. Sou capaz de escrever código limpo, modular e bem documentado, o que facilita a colaboração em equipe e a manutenção dos projetos.
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
              <h1 className="text-xl mb-2">Um pouco mais sobre <span className="text-complementaryTheme-400">minha história com</span> a <span className="text-complementaryTheme-400">Computação</span></h1>

              <p>
                Desde criança, sempre fui fascinado por computação e tecnologia. Meu interesse foi despertado pelo meu pai, dono de uma loja de reparo de computadores. Exploro a web desde 2008, descobri o poder da tecnologia em conectar pessoas e me encantei com suas possibilidades.
                <br /> <br />
                Atualmente, sou estudante de Ciência da Computação na UFMG, a melhor universidade federal do Brasil. Busco complementar meus conhecimentos com cursos de liderança em TI e participei do Bootcamp GoStack, oferecido pela Rocketseat. Essas experiências têm sido fundamentais para o desenvolvimento das minhas habilidades na área.
                <br /> <br />
                Destaco dois projetos relevantes: o NeedU, premiado como TCC do ano na PUC, e a Swanted, um aplicativo para uma empresa irlandesa. Essas realizações demonstram minha capacidade prática e minha motivação para explorar novos caminhos.
                <br /> <br />
                Atualmente, estou focado no desenvolvimento de websites e aplicativos usando a abordagem JamStack e o framework Next.js. Tenho interesse em explorar áreas como Bioinformática e Inteligência Artificial, buscando constantemente ampliar meus horizontes acadêmicos.
                <br /> <br />
                Além disso, ocupo o cargo de CTO na startup AgendaFy, onde tenho a oportunidade de participar como Lider ativamente da organização do projeto e orientar outros programadores.
                <br /> <br />
                No futuro, meu objetivo é me envolver em pesquisas científicas e ser um agente de mudança no setor de TI. Tenho ambições de criar novos frameworks e desenvolver inteligências artificiais disruptivas. Sou apaixonado pela computação e desejo contribuir para a inovação tecnológica no mercado de TI.
              </p>
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

