import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-journey')
export default class LJourney extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                max-width: 1100px;
                margin: 80px auto 100px auto;
                padding: 0 2rem;
                position: relative;
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

            .legend {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: -20px; /* Ajuste para aproximar do título */
                margin-bottom: 40px;
                font-size: 0.7rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .section-description {
                display: block; /* Para aceitar margens e largura */
                color: rgba(255, 255, 255, 0.6);
                font-size: 1rem;
                max-width: 600px;
                margin: 1.5rem auto 0 auto; /* Centraliza e dá espaço pro título */
                line-height: 1.6;
                font-weight: 400;
            }

            .legend {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 20px;
                font-size: 0.7rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .legend-item { display: flex; align-items: center; gap: 8px; color: #6200ee}

            .legend-item:nth-last-child(1){
                color: #4CAF50;
            }

            .dot-work { width: 8px; height: 8px; background: #6200ee; border-radius: 50%; box-shadow: 0 0 10px #6200ee;}
            .dot-study { width: 8px; height: 8px; background: #4CAF50; border-radius: 50%; box-shadow: 0 0 10px #4CAF50; }

            /* LAYOUT EM COLUNAS */
            .journey-wrapper {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
                position: relative;
            }

            .column-header {
                display: flex;
                align-items: center;
                gap: 12px;
                padding-bottom: 15px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                margin-bottom: 25px;
            }

            .column-header span {
                color: #fff;
                font-weight: 800;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            .card {
                background: rgba(13, 3, 22, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-left: 4px solid #6200ee;
                padding: 1.5rem;
                margin-bottom: 20px;
                border-radius: 4px;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
                cursor: default;
            }

            .card:hover {
                background: rgba(157, 70, 255, 0.05);
                transform: translateX(5px);
                border-left-width: 8px;
            }

            .study-card { border-left-color: #4CAF50; }

            .date {
                font-family: monospace;
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.4);
                margin-bottom: 8px;
                display: block;
            }

            .title {
                color: #fff;
                font-size: 1.2rem;
                font-weight: 800;
                margin: 0 0 4px 0;
            }

            .subtitle {
                color: #9d46ff;
                font-size: 0.8rem;
                font-weight: 600;
                display: block;
                margin-bottom: 12px;
            }

            .study-subtitle { color: #4CAF50; }

            .desc {
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.85rem;
                line-height: 1.5;
                margin: 0;
            }

            @media (max-width: 768px) {
                .section-description {
                    font-size: 0.9rem;
                    padding: 0 1rem;
                }
            }

            /* Responsividade */
            @media (max-width: 850px) {
                .journey-wrapper { grid-template-columns: 1fr; }
            }
        `;
    }

     @property({ type: Array })
    workHistory = [
        { 
            date: 'JUL 2024 - ATUAL', 
            title: 'Desenvolvedor Web Junior', 
            company: 'Associação Educacional Nove de Julho (UNINOVE)', 
            desc: 'Atuo no desenvolvimento de sistemas completos, criando dashboards, aplicações web e participando da implementação de projetos de desenvolvimento de jogos. Trabalho com front-end baseado nos designs da equipe de designers e também com back-end e banco de dados, evoluindo como Full Stack. Desenvolvo seguindo os princípios de orientação a objetos para garantir organização e manutenibilidade do código.' 
        },
        { 
            date: 'FEV 2023 - JUL 2024', 
            title: 'Estagiário em Desenvolvimento Web', 
            company: 'Associação Educacional Nove de Julho (UNINOVE)', 
            desc: 'Atuei no desenvolvimento de projetos front-end com foco em Web Components e TypeScript, aplicando orientação a objetos para garantir modularidade e manutenibilidade do código. Desenvolvi uma biblioteca própria de Web Components para padronizar interfaces, otimizar a performance e acelerar o desenvolvimento de aplicações web.' 
        }
    ];

    @property({ type: Array })
    studyHistory = [
        { 
            date: 'EM CURSO', 
            title: 'Pós-Graduação: Data Science & Analytics', 
            institution: 'UNINOVE', 
            desc: 'Especialização em inteligência de dados e modelos estatísticos.' 
        },
        { 
            date: '2023', 
            title: 'Bacharelado em Ciência da Computação', 
            institution: 'UNINOVE', 
            desc: 'Formação acadêmica focada em engenharia de software.' 
        },
        { 
            date: '2023', 
            title: 'Tecnólogo em Análise de Sistemas', 
            institution: 'Fatec São Caetano do Sul', 
            desc: 'Foco em gestão tecnológica e desenvolvimento ágil.' 
        }
    ];

    protected override render(): TemplateResult {
        return html`
            <header class="section-header">
                <p>Trajetória</p>
                <h2>Jornada do Desenvolvedor</h2>
                <span class="section-description">
                    Acompanhe minha evolução cronológica entre o mercado de trabalho 
                    e o aprofundamento acadêmico.
                </span>
            </header>

            <div class="legend">
                <div class="legend-item"><span class="dot-work"></span> Experiência</div>
                <div class="legend-item"><span class="dot-study"></span> Educação</div>
            </div>

            <div class="journey-wrapper">
                
                <div class="work-column">
                    <div class="column-header">
                        <span>⚔️ Battle Log (Carreira)</span>
                    </div>
                    ${this.workHistory.map(item => html`
                        <div class="card">
                            <span class="date">${item.date}</span>
                            <h3 class="title">${item.title}</h3>
                            <span class="subtitle">${item.company}</span>
                            <p class="desc">${item.desc}</p>
                        </div>
                    `)}
                </div>

                <div class="study-column">
                    <div class="column-header">
                        <span>📜 Knowledge (Estudos)</span>
                    </div>
                    ${this.studyHistory.map(item => html`
                        <div class="card study-card">
                            <span class="date">${item.date}</span>
                            <h3 class="title">${item.title}</h3>
                            <span class="subtitle study-subtitle">${item.institution}</span>
                            <p class="desc">${item.desc}</p>
                        </div>
                    `)}
                </div>

            </div>
        `;
    }
}