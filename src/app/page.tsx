import { FaFile } from 'react-icons/fa'

import { Img } from "@/components/atoms/Img";
import { Button } from "@/components/atoms/Button";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { Project } from "@/components/organisms/Project";

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
          <header className="w-full flex justify-center min-h-[720px]">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-lg text-center">
              Aqui você encontra meus <span className="text-theme-400">projetos</span>.
            </h1>
          </header>

          <main>
            <Project />
          </main>
        </section>

        <section>
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Conheça mais <span className="text-theme-400">sobre mim</span> e <span className="text-theme-400">minha trajetória na programação.</span>
            </h1>
          </header>

          <main className="w-full bg-slate-50 h-[720px]">

          </main>
        </section>

        <section>
          <header className="w-full flex justify-center bg-slate-900 py-16">
            <h1 className="text-[40px] font-bold text-slate-50 max-w-3xl text-center">
              Escute o que <span className="text-theme-400">outras pessoas</span> que <span className="text-theme-400">trabalharam comigo</span> têm a dizer.
            </h1>
          </header>

          <main className="w-full bg-slate-50 h-[720px]">

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
