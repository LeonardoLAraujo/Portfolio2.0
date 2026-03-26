import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-stats')
export default class LStats extends LitElement {
    
    @property({ type: Array })
    careerInfo = [
        { label: 'Experiência Total', value: '3 Anos', detail: 'Especialista Front-end', icon: '💻' },
        { label: 'Fullstack Journey', value: '1 Ano', detail: 'Node.js & Mysql', icon: '⚡' },
    ];

    @property({ type: Array })
    openSourceInfo = [
        { label: 'Ecossistema NPM', value: '2 Libs', detail: 'Bibliotecas Públicas', icon: '📦' },
        { label: 'App em Produção', value: '1 Ativo', detail: 'Disponível Online', icon: '🌐' }
    ];

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                max-width: 1100px;
                margin: -30px auto 60px auto;
                padding: 0 2rem;
                position: relative;
                z-index: 8;
            }

            .header-info {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 12px;
            }

            .badge {
                background: #6200ee;
                color: white;
                font-size: 0.65rem;
                font-weight: 900;
                padding: 4px 10px;
                border-radius: 4px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .main-panel {
                background: rgba(13, 3, 22, 0.95);
                border: 1px solid rgba(157, 70, 255, 0.3);
                border-radius: 8px;
                padding: 2.5rem;
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                gap: 2.5rem;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
            }

            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
            }

            .info-card {
                display: flex;
                flex-direction: column;
                gap: 4px;
                border-left: 2px solid rgba(98, 0, 238, 0.3);
                padding-left: 12px;
                transition: all 0.3s ease;
                cursor: default;
            }

            .info-card:hover {
                transform: translateY(-5px);
                border-left-color: #9d46ff;
                background: rgba(157, 70, 255, 0.05);
            }

            /* Destaque para conquistas externas (NPM/App) */
            .achievement-card {
                border-left-color: #4CAF50;
            }

            .info-label {
                color: rgba(255, 255, 255, 0.4);
                font-size: 0.7rem;
                text-transform: uppercase;
                font-weight: 700;
            }

            .info-value {
                color: #fff;
                font-size: 1.6rem;
                font-weight: 900;
                margin: 0;
            }

            .info-detail {
                color: #9d46ff;
                font-size: 0.75rem;
                font-weight: 500;
            }

            .progress-section {
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                padding-left: 0rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: default;
            }

            .progress-header {
                display: flex;
                justify-content: space-between;
                color: white;
                font-size: 0.75rem;
                margin-bottom: 10px;
                font-weight: 600;
            }

            .bar-container {
                width: 100%;
                height: 8px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
            }

            .bar-fill {
                width: 65%;
                height: 100%;
                background: linear-gradient(90deg, #6200ee, #9d46ff);
                border-radius: 10px;
            }

            .description {
                margin-top: 15px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.75rem;
                line-height: 1.5;
            }

            @media (max-width: 850px) {
                .main-panel { grid-template-columns: 1fr; }
                .progress-section { border-left: none; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1.5rem; }
            }

            @media (max-width: 550px) {
                .info-grid { grid-template-columns: 1fr; }
            }

            @media (min-width: 768px){
                .progress-section{
                    padding-left: 2.5rem;
                }
            }
        `;
    }

    protected override render(): TemplateResult {
        return html`
            <div class="header-info">
                <span class="badge">Estatísticas</span>
                <span style="color: rgba(255,255,255,0.6); font-size: 0.8rem;">Breve panorama da minha trajetória técnica.</span>
            </div>
            
            <div class="main-panel">
                <div class="info-grid">
                    ${this.careerInfo.map(item => html`
                        <div class="info-card">
                            <span class="info-label">${item.label}</span>
                            <h3 class="info-value">${item.value}</h3>
                            <span class="info-detail">${item.detail}</span>
                        </div>
                    `)}
                    ${this.openSourceInfo.map(item => html`
                        <div class="info-card achievement-card">
                            <span class="info-label">${item.label}</span>
                            <h3 class="info-value">${item.value}</h3>
                            <span class="info-detail">${item.detail}</span>
                        </div>
                    `)}
                </div>

                <div class="progress-section">
                    <div class="progress-header">
                        <span>Pós-Graduação (DATA SCIENCE AND ANALYTICS)</span>
                        <span>65%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar-fill"></div>
                    </div>
                    <p class="description">
                        Aprofundando em <strong>Big Data e inteligência analítica</strong> para integrar o poder dos dados ao desenvolvimento de sistemas de alta performance.
                    </p>

                    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 10px;">
                        <div>
                            <div style="color: rgba(255,255,255,0.4); font-size: 0.6rem; text-transform: uppercase; font-weight: 800;">Base de Operações</div>
                            <div style="color: #fff; font-size: 0.85rem; font-weight: 600;">RIO GRANDE DA SERRA - SP</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}