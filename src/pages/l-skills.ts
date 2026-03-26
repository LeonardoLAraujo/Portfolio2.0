import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-skills')
export default class LSkills extends LitElement {

    @property({ type: Array })
    skills = [
        { name: 'Front-end Core', level: 90, tags: 'Lit Element, TypeScript, HTML, CSS', icon: '' },
        { name: 'Systems Analysis', level: 40, tags: 'Arquitetura, SQL, PYTHON, POWER BI', icon: '' },
        { name: 'Fullstack Dev', level: 60, tags: 'Node.js, PocketBase, MYSQL, SQL SERVER', icon: '' },
        { name: 'Game Design', level: 20, tags: 'State Machines, Logic, GODOT, GDSCRIPT, C#, UNITY', icon: '' }
    ];

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                /* Aumentado para dar mais presença no Desktop */
                max-width: 1300px; 
                width: 100%;
                margin: 0 auto 60px auto;
                padding: 0 2rem;
                position: relative;
                box-sizing: border-box;
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

        .section-description {
            display: block;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1rem;
            max-width: 700px;
            margin: 1.5rem auto 0 auto;
            line-height: 1.6;
            font-weight: 400;
        }

            .skills-header {
                margin-bottom: 35px;
                border-left: 4px solid #6200ee;
                padding-left: 15px;
            }

            .skills-header h2 {
                color: #fff;
                font-size: 1.6rem;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin: 0;
                font-family: 'Courier New', monospace;
            }

            .skills-grid {
                display: grid;
                /* 3 colunas por padrão no desktop */
                grid-template-columns: repeat(3, 1fr); 
                gap: 2rem;
                width: 100%;
            }

            .skill-card {
                background: rgba(13, 3, 22, 0.8);
                border: 1px solid rgba(157, 70, 255, 0.1);
                padding: 1.8rem;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(10px);
            }

            .skill-card:hover {
                border-color: #9d46ff;
                transform: translateY(-8px);
                box-shadow: 0 15px 40px rgba(98, 0, 238, 0.3);
                background: rgba(25, 10, 40, 0.9);
            }

            .skill-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }

            .skill-name {
                color: #fff;
                font-weight: 800;
                font-size: 1.1rem;
            }

            .progress-bg {
                width: 100%;
                height: 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 5px;
                margin-bottom: 15px;
                position: relative;
                overflow: hidden;
            }

            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #6200ee, #9d46ff);
                border-radius: 5px;
                transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }

            /* EFEITO DE ENERGIA ATIVA (> 90%) */
            .master-skill .progress-fill::after {
                content: "";
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                background: linear-gradient(
                    90deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.5), 
                    transparent
                );
                animation: spark-flow 2s infinite linear;
            }

            @keyframes spark-flow {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }

            .master-skill .progress-fill {
                box-shadow: 0 0 20px #9d46ff, 0 0 5px #fff;
            }

            .skill-tags {
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.75rem;
                font-family: monospace;
                text-transform: uppercase;
                letter-spacing: 1px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .level-badge {
                font-size: 0.7rem;
                background: rgba(157, 70, 255, 0.2);
                color: #9d46ff;
                padding: 3px 8px;
                border-radius: 4px;
                font-weight: 900;
                border: 1px solid rgba(157, 70, 255, 0.3);
            }

            /* BREAKPOINTS PARA RESPONSIVIDADE */
            @media (max-width: 1150px) {
                .skills-grid {
                    grid-template-columns: repeat(2, 1fr); /* 2 colunas para tablets/laptops */
                }
            }

            @media (max-width: 768px) {
                :host { padding: 0 1.5rem; }
                .skills-grid {
                    grid-template-columns: 1fr; /* 1 coluna para mobile */
                    gap: 1.2rem;
                }
                .skill-card { padding: 1.5rem; }
            }
        `;
    }

    protected override render(): TemplateResult {
        return html`
            <header class="section-header">
                <p>Arsenal</p>
                <h2>Habilidades Técnicas</h2>
                <span class="section-description">
                    Níveis de proficiência em desenvolvimento full-stack, análise de sistemas 
                    e processamento de dados aplicados a soluções reais.
                </span>
            </header>

            <div class="skills-grid">
                ${this.skills.map(s => html`
                    <div class="skill-card ${s.level >= 90 ? 'master-skill' : ''}">
                        <div class="skill-info">
                            <span class="skill-name">${s.name}</span>
                            <span class="level-badge">${s.level}% MASTERED</span>
                        </div>
                        
                        <div class="progress-bg">
                            <div class="progress-fill" style="width: ${s.level}%"></div>
                        </div>
                        
                        <div class="skill-tags">
                            <span style="font-size: 1.1rem">${s.icon}</span>
                            <span>${s.tags}</span>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}