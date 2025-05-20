'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-xl font-bold">RyanJesus.dev</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-10 pl-4">
              <a href="#sobre">Sobre</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* HERO SECTION */}
      <main
        id="hero"
        className="h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Olá, eu sou <span className="text-primary">Ryan Jesus</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground max-w-xl mb-6"
        >
          Desenvolvedor Fullstack. Especialista em interfaces minimalistas, código limpo, APIs de alto desempenho e aprendizado autodidata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Button asChild>
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/RyanJesus_CV.pdf" download>Download CV</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <a href="#sobre">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronDown size={32} />
            </motion.div>
          </a>
        </motion.div>
      </main>

      {/* QUEM SOU EU? */}
      <section
        id="sobre"
        className="max-w-3xl mx-auto px-4 pt-12 pb-24 text-center scroll-mt-20"
      >
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Quem sou eu?
        </motion.h3>

        <motion.p
          className="text-muted-foreground leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sou um desenvolvedor <span className="font-semibold">FullStack</span>, atualmente cursando 
          <span className="font-semibold text-primary"> Análise e Desenvolvimento de Sistemas</span> no <span className="italic">Centro Universitário Senac - Santo Amaro </span>
          Residindo em <span className="font-semibold text-primary">Brasil, São Paulo - SP. </span> + de 2 anos de experiência em desenvolvimento, com habilidades sólidas em:
        </motion.p>
        <motion.div className="mt-4">
          <ul className="text-muted-foreground">
            <li>Backend: <span className="font-semibold">Typescript, NodeJS, Java</span></li>
            <li>FrontEnd: <span className="font-semibold">ReactJS, TailwindCSS</span></li>
            <li>Banco de dados: <span className="font-semibold">MySQL, PostgreSQL, MongoDB</span></li>
            <li>Infraestrutura: Docker, AWS, Redis</li>
            <li>Metodoligias & Ferramentas: Scrum, Kanban, WebSocket </li>
          </ul>
        </motion.div>
      </section>

    </div>
  )
}
