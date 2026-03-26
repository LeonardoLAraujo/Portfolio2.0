import { LitElement, html, css, TemplateResult, CSSResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./l-modal";
import { Project } from '../pages/l-project';

@customElement('l-modal-project')
export default class LModalProject extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                --primary: #9d46ff;
                --bg-card: #12091d; /* Fundo escuro profundo */
                --text-title: #ffffff;
                --text-body: rgba(255, 255, 255, 0.7);
                --radius: 28px;
            }

            .project-wrapper {
                display: flex;
                flex-direction: column;
                background: var(--bg-card);
                border-radius: 5px;
                overflow: hidden;
                border: 1px solid rgba(157, 70, 255, 0.2);
            }

            /* Banner de Destaque */
            .project-hero {
                position: relative;
                width: 100%;
                height: 243px;
                overflow: hidden;
            }

            .project-hero img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                transition: transform 0.5s ease;
            }

            /* Efeito de fade na imagem para o conteúdo */
            .project-hero::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(180deg, rgba(18, 9, 29, 0) 0%, rgba(18, 9, 29, 1) 100%);
            }

            /* Container de Conteúdo */
            .project-content {
                padding: 2rem 2.5rem 3rem;
                position: relative;
                z-index: 2;
                margin-top: -40px; /* Sobe o texto para cima da imagem */
            }

            .project-name {
                font-size: 2.2rem;
                font-weight: 800;
                color: var(--text-title);
                margin: 0 0 0.8rem 0;
                letter-spacing: -1px;
                text-shadow: 0 4px 12px rgba(0,0,0,0.5);
            }

            /* Tags Estilizadas */
            .tag-list {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 2rem;
            }

            .tag-item {
                background: rgba(157, 70, 255, 0.15);
                color: #b388ff;
                padding: 5px 14px;
                border-radius: 8px;
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: 1px solid rgba(157, 70, 255, 0.3);
            }

            .description-text {
                font-size: 1.05rem;
                line-height: 1.7;
                color: var(--text-body);
                margin-bottom: 2rem;
            }

            /* Seção do Player YouTube */
            .video-section {
                background: #000;
                border-radius: 16px;
                aspect-ratio: 16 / 9;
                margin: 1.5rem 0;
                overflow: hidden;
                box-shadow: 0 15px 35px rgba(0,0,0,0.4);
                border: 1px solid rgba(255,255,255,0.1);
                height: 300px;
                width: 100%;
            }

            iframe {
                width: 100%;
                height: 100%;
                border: none;
            }

            .video-placeholder {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: #0a050f;
                color: rgba(255,255,255,0.4);
                text-align: center;
                padding: 20px;
            }

            .video-placeholder p {
                font-size: 0.9rem;
                margin-top: 10px;
                font-family: 'Segoe UI', sans-serif;
                font-style: italic;
            }

            /* Botão de Ação Estilo "Primary" */
            .actions {
                display: flex;
                gap: 16px; /* Espaço entre os botões */
                flex-wrap: wrap; /* Para telas pequenas não quebrar */
                margin-top: 1.5rem;
            }

            .btn-primary, .btn-secondary {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 12px 24px;
                border-radius: 12px;
                font-weight: 700;
                font-size: 0.95rem;
                text-decoration: none;
                transition: all 0.3s ease;
            }

            /* Botão de Destaque (Ver Site) */
            .btn-primary {
                background: var(--primary);
                color: white;
                box-shadow: 0 8px 20px rgba(157, 70, 255, 0.3);
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                filter: brightness(1.2);
                box-shadow: 0 12px 25px rgba(157, 70, 255, 0.5);
            }

            /* Botão Secundário (GitHub) */
            .btn-secondary {
                background: rgba(255, 255, 255, 0.05);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .btn-secondary:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: var(--primary);
            }

            .btn-github {
                display: inline-flex;
                align-items: center;
                gap: 12px;
                padding: 14px 28px;
                background: var(--primary);
                color: white;
                text-decoration: none;
                border-radius: 12px;
                font-weight: 700;
                font-size: 1rem;
                transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                box-shadow: 0 8px 20px rgba(157, 70, 255, 0.3);
            }

            .section-title {
                font-size: 0.9rem;
                font-weight: 700;
                color: var(--primary);
                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .section-title::before {
                content: '';
                width: 20px;
                height: 2px;
                background: var(--primary);
            }

            .btn-github:hover {
                transform: scale(1.03);
                box-shadow: 0 12px 28px rgba(157, 70, 255, 0.5);
                filter: brightness(1.2);
            }

            .private-repo-info {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 10px 16px;
                background: rgba(157, 70, 255, 0.05); /* Um toque da sua cor primária */
                border: 1px dashed rgba(157, 70, 255, 0.3);
                border-radius: 8px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.85rem;
            }

            .private-repo-info svg {
                color: var(--primary);
            }

            @media (max-width: 768px) {
                .project-content { 
                    padding: 1.5rem; 
                }

                .project-name { 
                    font-size: 1.7rem; 
                }

                .project-hero { 
                    height: 200px; 
                }
            }

            @media (min-width: 768px){
                .video-section{
                    height: 100%;
                }
            }
        `;
    }

    private _body = document.querySelector("body");

    @property({ type: Object }) 
    project!: Project;

    @property({ type: Boolean }) 
    isModalOpen: boolean = false;

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this._body!.style!.overflow = "hidden";
    }

    private _handleModalClosed() {
        this._body!.style!.overflow = "auto";

        this.dispatchEvent(new CustomEvent('modal-closed', {
            bubbles: true,
            composed: true
        }));
    }

    protected override render(): TemplateResult {
        if (!this.project) return html``;

        return html`
            <l-modal 
                ?open=${this.isModalOpen} 
                .title=${''} 
                @modal-closed=${() => {this._handleModalClosed()}}> 
                
                <div class="project-wrapper">
                    <div class="project-hero">
                        <img src="${this.project.thumb}" alt="${this.project.title}">
                    </div>

                    <div class="project-content">
                        <header class="header-info">
                            <h1 class="project-name">${this.project.title}</h1>
                            <div class="tag-list">
                                ${this.project.tags?.map((t: string) => html`
                                    <span class="tag-item">${t}</span>
                                `)}
                            </div>
                        </header>

                        <div class="description-text">
                            ${this.project.description}
                        </div>

                        <h3 class="section-title">Demonstração em Vídeo</h3>

                        <div class="video-section">
                            ${this.project.videoUrl ? html`
                                <iframe 
                                    src="${this.project.videoUrl}" 
                                    title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen>
                                </iframe>
                            ` : html`
                                <div class="video-placeholder">
                                    <img width="80" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3dnYmJkeGdoZm5pM3J1amIwbDdwcmpucTMxYjd1cDAzM3p1bTJwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TIr8zo5XH9xbUC6V7G/giphy.gif">
                                    <p>Vídeo demonstrativo indisponível para este projeto</p>
                                </div>
                            `}
                        </div>

                        <div class="actions">
                            ${this.project.siteUrl ? html`
                                <a href="${this.project.siteUrl}" target="_blank" class="btn-primary">
                                    <span>ACESSAR PROJETO</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            ` : ''}

                            ${this.project.isPrivate ? html`
                                <div class="private-repo-info">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>Código privado para conformidade legal</span>
                                </div>
                            ` : html`
                                ${this.project.link ? html`
                                    <a href="${this.project.link}" target="_blank" class="btn-secondary">
                                        <span>CÓDIGO FONTE</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                ` : ''}
                            `}
                                
                        </div>
                    </div>
                </div>
            </l-modal>
        `;
    }
}