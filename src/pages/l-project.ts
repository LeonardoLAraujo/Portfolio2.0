import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../components/l-project-card'; // Importando o card que criamos
import "../components/l-modal";
import "../components/l-modal-project";
import "lit-player-youtube";

export interface Project {
    title: string;
    description: string;
    resume: string;
    thumb: string;
    tags: string[];
    link?: string;
    videoUrl?: string; // Campo opcional para a URL do YouTube
    siteUrl?: string;
    isPrivate?: boolean,
}

@customElement('l-projects')
export default class LProjects extends LitElement {

    @state()
    private _projects: Project[] = [
        {
            title: "ECV Component",
            description: "ECV Component é uma biblioteca de Web Components construída com Lit Element, desenvolvida para promover a reutilização, padronização e aceleração no desenvolvimento de interfaces visuais. O nome “ECV” vem de Visual Componentization Elements, destacando o foco em criar componentes visuais reutilizáveis",
            resume: "ECV Component é uma biblioteca de Web Components baseada em Lit Element que facilita a criação de interfaces com componentes visuais reutilizáveis, promovendo padronização e agilidade no desenvolvimento.",
            thumb: "https://raw.githubusercontent.com/LeonardoLAraujo/ecv-component/HEAD/docs/assets/icon.png",
            tags: ["Lit Element", "HTML&CSS", "NodeJs", "TypeScript", "Vite", "NPM"],
            link: "https://github.com/LeonardoLAraujo/ecv-component",
            videoUrl: "https://www.youtube.com/embed/tPBbeszlIXw?si=6YVBGRIew9rbJp0G" 
        },
        {
            title: "Lit Player Youtube",
            description: "O lit-player-youtube é um componente customizado construído com Lit (Web Components) para incorporar vídeos do YouTube de forma mais leve, modular e flexível. Ele permite que você tenha um player funcional, personalizável e integrado ao ecossistema de componentes, aproveitando reatividade e encapsulamento.",
            resume: "O lit-player-youtube é um Web Component com Lit que incorpora vídeos do YouTube de forma leve, modular e personalizável, com reatividade e encapsulamento.",
            thumb: "https://i.ytimg.com/vi/L-hQnWvCWpg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCX0yZ128fz4_nNec7rIhkM6Qy2rQ",
            tags: ["Lit Element", "HTML&CSS", "NodeJs", "TypeScript", "Vite", "NPM"],
            link: "https://github.com/LeonardoLAraujo/lit-player-youtube",
            videoUrl: "https://www.youtube.com/embed/L-hQnWvCWpg?si=yloaYfml7bEx_uSe"
        },
        {
            title: "My Bitcoin",
            description: "O My Bitcoin é um aplicativo financeiro com foco educativo e demonstrativo, que simula a posse de 1 Bitcoin e exibe seu valor atualizado em tempo real. A proposta é oferecer uma forma simples e prática de acompanhar o preço da criptomoeda, permitindo ao usuário visualizar sua valorização em reais de maneira dinâmica e acessível. Ideal para quem quer entender melhor o mercado de criptomoedas sem precisar investir diretamente.",
            resume: "Simulador de Bitcoin que mostra, em tempo real, o valor de 1 BTC em reais, facilitando o acompanhamento e entendimento do mercado cripto.",
            thumb: "/myBitcoin.png",
            tags: ["GDScript", "GODOT"],
            siteUrl: "https://play.google.com/store/apps/details?id=com.alrenostudios.bitcoin" 
        },
        {
            title: "InvestManager (IFSANT)",
            description: "InvestManager (IFSANT) é um ecossistema de gestão financeira desenvolvido para consolidar e analisar ativos de renda variável (Ações, FIIs e ETFs) e Renda Fixa. O foco principal do projeto é a automação do cálculo de Preço Médio (PM) e o acompanhamento de performance histórica. A aplicação utiliza uma arquitetura modular com Lit Element e TypeScript, garantindo uma interface reativa e de alta performance. Através da integração com APIs de dados financeiros, o sistema fornece cotações em tempo real, permitindo que o investidor tenha uma visão clara da sua alocação de ativos e proventos recebidos.",
            resume: "Dashboard financeiro para gestão inteligente de ativos com cálculo automático de Preço Médio, métricas de performance e monitorização de dividendos em tempo real.",
            thumb: "https://raw.githubusercontent.com/LeonardoLAraujo/manager-invest/46e51b1163aac3323b4bdfa48dfed660456a1374/front-end/public/icon.svg",
            tags: ["Typescript", "HTML&CSS", "Lit Element", "NodeJs", "Vite", "Pocketbase"],
            link: "https://github.com/LeonardoLAraujo/manager-invest", 
        },
        {
            title: "AnimesOn",
            description: "Plataforma de catálogo de animes desenvolvida para explorar automação e consumo de APIs. O projeto utiliza um robô em Python para web scraping de episódios e integra a API do Kitsu para obter metadados oficiais como banners e sinopses. Focado estritamente em estudos de organização de dados e arquitetura front-end com Lit.",
            resume: "Estudo de caso focado em Web Scraping com Python e consumo de APIs (Kitsu) para organização de catálogos de mídia.",
            thumb: "https://i.ytimg.com/vi/PJppytCYKrg/maxresdefault.jpg", 
            tags: ["Python", "Web Scraping", "API Kitsu", "Lit Element", "Node.js"],
            videoUrl: "https://www.youtube.com/embed/PJppytCYKrg",
            isPrivate: true
        },
        {
            title: "Acessibilidade",
            description: "O repositório no GitHub reúne principalmente código em JavaScript, além de componentes visuais, scripts especializados (como o ecv-accessibility.js) e estruturas de layout pensadas conforme boas práticas de acessibilidade. Ao ser implementado, o componente adiciona funcionalidades que melhoram a navegação, leitura e interação do usuário, promovendo mais autonomia e inclusão digital. Esse projeto evidencia o compromisso com a usabilidade universal e o desenvolvimento ético de software, garantindo que a tecnologia seja acessível para todos, independentemente de suas limitações.",
            resume: "O Acessibilidade é um componente desenvolvido para tornar aplicações e interfaces mais inclusivas de forma prática e eficiente. Ele pode ser integrado a qualquer site, permitindo que plataformas que não possuem recursos de acessibilidade passem a oferecer uma experiência mais adequada para pessoas com deficiência.", 
            thumb: "https://i0.wp.com/mecanicabeto.com.br/wp-content/uploads/2023/05/26606.jpg?resize=900%2C900&ssl=1",
            tags: ["JavaScript", "HTML&CSS", "Lit Element", "Vite"],
            link: "https://github.com/LeonardoLAraujo/Acessibilidade",
            videoUrl: "https://www.youtube.com/embed/TDwD8oFUrdk?si=8AnFOzLx2tOPSEqq",
            siteUrl: "https://acessibilidade-sage-pi.vercel.app/"
        },
        {
            title: "Studies of Basic Subjects",
            description: "Uma plataforma criada para estudantes de matérias básicas, oferecendo conteúdos de apoio, organização didática e interface simples para otimizar o aprendizado. Desenvolvida em TypeScript; busca facilitar o estudo de disciplinas fundamentais de forma acessível para quem está começando ou revisando conceitos principais.",
            resume: "Plataforma em TypeScript que organiza conteúdos de matérias básicas com uma interface simples, facilitando o aprendizado e a revisão de conceitos fundamentais.",
            thumb: "https://i9.ytimg.com/vi/pBxzA9aMmwY/mqdefault.jpg?sqp=CMCKlc4G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACtgWKAgwIABABGC4gKSh_MA8=&rs=AOn4CLAE5jyQ9cHSXJZ0YyzfxbcVaR8gDA",
            tags: ["Typescript", "HTML&CSS", "Lit Element", "NodeJs", "Vite"],
            link: "https://github.com/LeonardoLAraujo/Studies-of-basic-subjects",
            videoUrl: "https://www.youtube.com/embed/pBxzA9aMmwY?si=t1z_VhDBClT6gGfx",
            siteUrl: "https://studies-of-basic-subjects.vercel.app/" 
        },
        {
            title: "Vídeo Interativo",
            description: "Uma aplicação inovadora que combina vídeo com interatividade — permitindo que o usuário interaja com elementos enquanto assiste, transformando o vídeo em algo dinâmico e envolvente.",
            resume: "Plataforma de vídeo interativo que permite ao usuário interagir com elementos da interface em tempo real durante a reprodução.", 
            thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500",
            tags: ["JavaScript", "HTML&CSS", "Lit Element", "Vite"],
            link: "https://github.com/LeonardoLAraujo/Video-Interativo",
            videoUrl: "https://www.youtube.com/embed/p2Guu8--1o4?si=9GZNIgbvx6wqE-Ow",
            siteUrl: "https://video-interativo.vercel.app/"
        },
    ];

    @state()
    private _visibleCount = 3; // Quantidade inicial de projetos

    @state() 
    private _isModalOpen = false;

    @state() 
    private _selectedProject: Project | null = null;

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                padding: 60px 1.5rem; /* Reduzi o padding superior para mobile */
                max-width: 1200px;
                margin: 0 auto;
                box-sizing: border-box; /* Garante que o padding não aumente a largura total */
                width: 100%;
            }

            .section-header {
                text-align: center;
                margin-bottom: 4rem;
                color: #ffffff !important; 
            }

            .section-header p {
                color: #a76aff;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 8px;
                font-size: 21px;
            }

            .section-header h2 {
                font-size: clamp(1.8rem, 5vw, 2.8rem);
                margin: 0;
                font-weight: 800;
            }

            .projects-grid {
                display: grid;
                /* Alterado de 320px para 1fr em telas muito pequenas para não estourar */
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
                gap: 2rem;
                margin-bottom: 3rem;
                width: 100%;
            }

            /* Estilização do Botão Ver Mais */
            .load-more-container {
                display: flex;
                justify-content: center;
                margin-top: 2rem;
            }

            .btn-load-more {
                background: transparent;
                color: #a76aff;
                border: 2px solid #a76aff;
                padding: 12px 30px;
                font-size: 0.9rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 2px;
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .btn-load-more:hover {
                background: #a76aff;
                color: #ffffff;
                box-shadow: 0 0 20px rgba(167, 106, 255, 0.4);
                transform: translateY(-3px);
            }

            @media (max-width: 768px) {
                :host { 
                    padding: 40px 1rem; 
                }

                .section-header {
                    margin-bottom: 2.5rem;
                }

                .section-header p {
                    font-size: 16px; /* Ajuste para não ficar gigante no celular */
                    letter-spacing: 2px;
                }

                .projects-grid { 
                    gap: 1.5rem;
                    /* Garante que em celulares pequenos o card ocupe a largura disponível */
                    grid-template-columns: 1fr; 
                }

                .btn-load-more {
                    width: 100%; /* Botão vira bloco no mobile, facilitando o clique (touch) */
                    padding: 15px;
                }
            }
        `;
    }

    private _showMore() {
        this._visibleCount += 3; // Carrega mais 3 projetos por clique
    }

    private _handleOpenModal(p: Project) {
        this._selectedProject = { ...p };
        this._isModalOpen = true;
    }

    protected override render(): TemplateResult {
        // Filtra a lista baseada no contador
        const visibleProjects = this._projects.slice(0, this._visibleCount);

        return html`
            <header class="section-header">
                <p>Portfólio</p>
                <h2>Meus Projetos Recentes</h2>
            </header>

            <div class="projects-grid">
                ${visibleProjects.map(p => html`
                    <l-project-card 
                        @click=${() => this._handleOpenModal(p)} 
                        .title=${p.title} 
                        .resume=${p.resume} 
                        .thumb=${p.thumb} 
                        .tags=${p.tags}
                        style="cursor: pointer;"
                    ></l-project-card>
                `)}
            </div>

            ${this._visibleCount < this._projects.length ? html`
                <div class="load-more-container">
                    <button class="btn-load-more" @click=${this._showMore}>
                        Ver Mais Projetos
                    </button>
                </div>
            ` : ''}

           ${this._isModalOpen && this._selectedProject ? html`
                <l-modal-project 
                    ?isModalOpen=${this._isModalOpen} 
                    .project=${this._selectedProject}
                    @modal-closed=${() => { 
                        this._isModalOpen = false; 
                        this._selectedProject = null;
                    }}>
                </l-modal-project>` : ''} 
        `;
    }
}