'use client'

import { GithubIcon, Menu, YoutubeIcon, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

import { motion } from "framer-motion"

import { ProjectsData } from "./data/Projects"

import { useForm, ValidationError } from '@formspree/react'



export default function Home() {

  const [state, handleSubmit] = useForm("mldbkdry")

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl font-semibold text-green-600">Mensagem enviada com sucesso! ✅</h1>
          <p className="text-muted-foreground">Obrigado por entrar em contato. Responderei em breve.</p>
        </motion.div>
      </section>
    )
  }

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
          <a href="#sobre" className="block p-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >

              <ChevronDown size={32} />
            </motion.div>


          </a>

        </motion.div>
      </main>

      {/* QUEM SOU EU? */}
      <section
        id="sobre"
        className="h-screen flex flex-col justify-center items-center max-w-3xl mx-auto px-4 text-center scroll-mt-12"
      >
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Quem sou?
        </motion.h3>

        <motion.p
          className="text-muted-foreground leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sou um desenvolvedor <span className="font-semibold">FullStack</span>, atualmente cursando
          <span className="font-semibold text-primary"> Análise e Desenvolvimento de Sistemas</span> no <span className="italic">Centro Universitário Senac - Santo Amaro. </span>
          Residindo em <span className="font-semibold text-primary">Brasil, São Paulo - SP. </span> + de 3 anos de experiência em desenvolvimento, com habilidades sólidas em:
        </motion.p>
        <motion.div className="mt-4 text-sm">
          <ul className="text-muted-foreground">
            <li>Backend: <span className="font-semibold">Typescript, NodeJS, Java</span></li>
            <li>FrontEnd: <span className="font-semibold">ReactJS, TailwindCSS</span></li>
            <li>Banco de dados: <span className="font-semibold">MySQL, PostgreSQL, MongoDB</span></li>
            <li>Infraestrutura: <span className="font-semibold">Docker, AWS, Redis</span></li>
            <li>Métodologias & Ferramentas: <span className="font-semibold">Scrum, Kanban, WebSocket</span> </li>
          </ul>
        </motion.div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="w-full max-w-[700px] mx-auto flex flex-col overflow-hidden rounded-2xl shadow-md">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.img}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader className="px-4 pt-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => (
                    <Badge key={i} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="px-4 py-2 flex-1 space-y-2">
                <p className="text-sm text-muted-foreground">{project.details}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {project.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-4 pb-4 pt-2 flex justify-between">
                <a href={project.githubButton} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <GithubIcon size={16} /> GitHub
                  </Button>
                </a>
                <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <YoutubeIcon size={16} /> Ver vídeo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </section>

      <section id="contato" className="min-h-screen px-4 py-12 flex items-center justify-center text-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg flex flex-col gap-6"
        >
          <h1 className="text-4xl font-semibold text-center">Entre em contato comigo :)</h1>
          <p className="font-semibold italic text-sm text-muted-foreground">Faça uma proposta!</p>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" name="name" placeholder="Seu nome" required />
            <ValidationError prefix="Nome" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="Seu melhor e-mail" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" name="message" placeholder="Quero fazer um projeto, esse é o escopo..." required />
            <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
          </div>

          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </motion.form>
      </section>

      <footer className="text-center text-sm text-muted-foreground py-6">
        © {new Date().getFullYear()} Ryan Jesus. Todos os direitos reservados.
      </footer>



    </div >
  )
}
