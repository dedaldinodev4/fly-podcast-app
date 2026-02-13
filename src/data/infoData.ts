import type { Info } from "@/types/info";


export const infoData: Info = {
  sections: {
    navbar: {
      navlinks: [
        { name: "Home", to: "/" },
        { name: "Sobre", to: "#about" },
        { name: "Episódios", to: "#videos" },
        { name: "Contatos", to: "#contacts" }
      ]
    },
    hero: {
      title: 'Conversas que <span className="text-[#FF6900]">Elevam</span> Mentalidades',
      description: 'Um espaço onde grandes histórias encontram perguntas profundas — e cada episódio é uma experiência que vai além do óbvio.',
    },
    about: {
      title: 'Quem somos?',
      description: `O Fly Podcast é um espaço de diálogo aberto, inteligente 
          e sem filtros, onde ideias ganham profundidade e histórias revelam 
          o que realmente está por trás do sucesso, dos desafios e das transformações. 
          Através de conversas longas e autênticas com convidados de diferentes áreas, 
          o podcast cria um ambiente onde pensamento crítico, visão estratégica 
          e experiências reais se encontram para inspirar, provocar e expandir horizontes.`,
      subDescription: 'Nossa missão é elevar a mentalidade dos jovens angolanos e da comunidade global, através de histórias reais e convidados que fazem a diferença.',
      image: '/images/fly-01.jpeg',

    },
    contact: {
      title: 'Juntar-se ao nosso canal',
      description: 'Inscreve-te no canal e ativa as notificações para não perder nenhum episódio.'
    },
    episodes: {
      title: 'Episódios Recentes' 
    }
  }
}