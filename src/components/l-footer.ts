import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-footer')
export default class LFooter extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                width: 100%;
                background-color: #0d0316; 
                padding: 40px 0 30px 0;
                position: relative;
            }

            footer {
                width: 90%;
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                /* No desktop: Esquerda (Texto), Direita (Status + Icons) */
                grid-template-columns: 1fr auto;
                grid-template-rows: auto auto;
                gap: 20px;
                border-top: 1px solid rgba(157, 70, 255, 0.1);
                padding-top: 40px;
                position: relative;
            }

            .footer__content {
                grid-column: 1;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            /* CONTAINER DE ÍCONES NO CANTO SUPERIOR DIREITO */
            .social-links {
                grid-column: 2;
                grid-row: 1;
                display: flex;
                gap: 12px;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 10px;
            }

            .social-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: 8px;
                background: rgba(157, 70, 255, 0.05);
                border: 1px solid rgba(157, 70, 255, 0.1);
                transition: all 0.3s ease;
                color: rgba(255, 255, 255, 0.5);
            }

            .social-icon svg {
                width: 18px;
                height: 18px;
                fill: currentColor;
            }

            .social-icon:hover {
                color: #ffffff;
                background: rgba(157, 70, 255, 0.15);
                border-color: #a76aff;
                transform: translateY(-3px);
                box-shadow: 0 4px 12px rgba(167, 106, 255, 0.2);
            }

            .copyright {
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.85rem;
                font-weight: 500;
            }

            .tech-info {
                font-size: 0.7rem;
                color: rgba(157, 70, 255, 0.7);
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            /* STATUS ABAIXO DOS ÍCONES OU ALINHADO */
            .status {
                grid-column: 2;
                grid-row: 2;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;
                margin-top: 5px;
            }

            .status-dot {
                width: 6px;
                height: 6px;
                background-color: #00ff7f;
                border-radius: 50%;
                box-shadow: 0 0 8px #00ff7f;
                animation: pulse 2s infinite;
            }

            .status-text {
                color: #00ff7f;
                font-size: 10px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            @keyframes pulse {
                0% { opacity: 0.4; }
                50% { opacity: 1; }
                100% { opacity: 0.4; }
            }

            /* RESPONSIVIDADE */
            @media (max-width: 768px) {
                footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .social-links, .status {
                    justify-content: center;
                }
            }
        `;
    }

    protected override render(): TemplateResult {
        const currentYear = new Date().getFullYear();
        
        const githubIcon = html`<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
        const whatsappIcon = html`<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

        return html`
            <footer>
                <div class="footer__content">
                    <div class="copyright">
                        &copy; ${currentYear} — Leonardo Leal Araújo
                    </div>
                    <div class="tech-info">
                        Built with <span>Lit Element</span> • <span>TypeScript</span> • <span>NodeJs</span> • <span>Rive</span>
                    </div>
                </div>

                <div class="social-links">
                    <a href="https://github.com/LeonardoLAraujo" target="_blank" class="social-icon">
                        ${githubIcon}
                    </a>
                    <a href="https://wa.me/5511977510233" target="_blank" class="social-icon">
                        ${whatsappIcon}
                    </a>
                </div>

                <div class="status">
                    <div class="status-dot"></div>
                    <span class="status-text">System Online</span>
                </div>
            </footer>
        `;
    }
}