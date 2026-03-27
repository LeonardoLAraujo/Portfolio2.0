import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-home')
export default class LHome extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                min-height: 100vh;
                padding: 2rem;
            }

            .container {
                min-height: 100vh; 
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center; 
                align-items: center;
                padding: 40px 0; 
            }

            .container__user {
                width: 85%;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                z-index: 1;
                /* GLASSMORPHISM DARK */
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                padding: 3.5rem 2.5rem;
                border-radius: 32px;
                border: 1px solid rgba(157, 70, 255, 0.2);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
                gap: 1.8rem;
                margin: auto 0; 
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            .container__user:hover {
                transform: translateY(-10px);
                border-color: rgba(157, 70, 255, 0.5);
                box-shadow: 0 30px 60px rgba(98, 0, 238, 0.2);
            }

            .user__photo {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                background-image: url("/my_photo.jpeg");
                background-size: cover;
                background-position: center;
                border: 3px solid #9d46ff;
                box-shadow: 0 0 20px rgba(157, 70, 255, 0.4);
            }

            .info-text {
                text-align: center;
            }

            h1 {
                margin: 0;
                font-size: 2rem;
                font-weight: 800;
                color: #fff;
                line-height: 1.2;
                letter-spacing: -0.02em;
                text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            }

            .role {
                margin: 0.6rem 0 0 0;
                font-size: 1rem;
                font-weight: 600;
                color: #9d46ff;
                text-transform: uppercase;
                letter-spacing: 0.15em;
            }

            .bio {
                font-size: 0.95rem;
                color: rgba(255, 255, 255, 0.7);
                text-align: center;
                line-height: 1.6;
                padding: 0 15px;
            }

            .skills {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
                margin-top: 5px;
            }

            .badge {
                background: rgba(98, 0, 238, 0.15);
                color: #b388ff;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 11px;
                font-weight: 700;
                border: 1px solid rgba(157, 70, 255, 0.3);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .social-links {
                display: flex;
                gap: 20px;
                margin-top: 5px;
            }

            .social-links a {
                text-decoration: none;
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.85rem;
                font-weight: bold;
                transition: all 0.3s ease;
                padding: 5px 10px;
                border-radius: 8px;
            }

            .social-links a:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.05);
                text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
            }

            .divider {
                width: 60px;
                height: 4px;
                background: linear-gradient(90deg, #6200ee, #9d46ff);
                border-radius: 2px;
                margin-top: 0.5rem;
            }

            @media (min-width: 1024px){
                .container__user { 
                    max-width: 555px; 
                }

                .user__photo { 
                    width: 180px; 
                    height: 180px; 
                }

                h1 { 
                    font-size: 2.4rem; 
                }
            }
        `;
    }

    protected override render(): TemplateResult {
        return html`
            <div class="container">
                <div class="container__user">
                    <div class="user__photo"></div>
                    
                    <div class="info-text">
                        <h1>Leonardo Leal Araújo</h1>
                        <p class="role">Full Stack Developer</p>
                    </div>

                    <div class="bio">
                        Desenvolvedor Web com dupla graduação e foco em interfaces de alto desempenho. 
                        Unindo 3 anos de expertise em Frontend a uma sólida base Fullstack para criar experiências digitais completas.
                    </div>

                    <div class="skills">
                        <span class="badge">Especialista Front-end</span>
                        <span class="badge">Fullstack Journey</span>
                        <span class="badge">Componentes Reutilizáveis</span>
                    </div>

                    <div class="social-links">
                        <a href="https://github.com/LeonardoLAraujo" target="_blank">GITHUB</a>
                        <a href="https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo-2653b91b9" target="_blank">LINKEDIN</a>
                    </div>

                    <div class="divider"></div>
                </div>
            </div>
        `;
    }
}