export const ProjectsData = [
  {
    id: 1,
    img: '/betelgym_repository.png',
    badges: ['Typescript', 'React', 'Node.js', 'TailwindCSS'],
    details: (
      <>
        Projeto <span className="font-semibold">FULLSTACK</span>, interface minimalista e API com foco em performance.
      </>
    ),
    topics: ['Tela de login, cadastro e home', 'Validação com Zod', 'Performance ++'],
    githubButton: 'https://github.com/brucesantss/betelgym-website',
    videoDemo: 'https://youtube.com'
  },

  {
    id: 2,
    img: '/thenews_case.png',
    badges: ['Typescript', 'PostgreSQL', 'React', 'Node.js' ],
    details: (
      <>
        Case do <span className="font-semibold">THE NEWS</span>, objetivo de criar uma plataforma de <span className="italic">STREAK</span> para os leitores.
      </>
    ),
    topics: ['Tela de login, Dashboard ADMIN e Leitor', 'Webhook + Envio de email (SMTP)', 'Deploy Vercel (Backend e Frontend), Supabase'],
    githubButton: 'https://github.com/brucesantss/thenews-case',
    videoDemo: 'https://youtube.com'
  },

  {
    id: 3,
    img: '/cadastro_func.png',
    badges: ['Typescript', 'MySQL', 'React', 'Node.js' ],
    details: (
      <>
        Projeto Pessoal, <span className="font-semibold">Cadastro De funcionários</span>, um dashboard para ADMINS <span className="italic">cadastrarem seus funcionários</span> .
      </>
    ),
    topics: ['Dashboard com formulário', 'Integração com MySQL', 'Interface Intuitiva'],
    githubButton: 'https://github.com/brucesantss/thenews-case',
    videoDemo: 'https://youtube.com'
  },

  {
    id: 4,
    img: '/card_tracking.png',
    badges: ['Typescript', 'Node.js' ],
    details: (
      <>
        O <span className="font-semibold">Card Tracking</span>, é um CASE pessoal, objetivo de  <span className="italic">evitar erros humanos, atrasos e falta de visibilidade</span>.
      </>
    ),
    topics: ['Solicitar cartão de crédito ou débito', 'Atualizar status do pedido', 'Consultar status por ID'],
    githubButton: 'https://github.com/brucesantss/card-tracking-api',
    videoDemo: 'https://youtube.com'
  }
]
