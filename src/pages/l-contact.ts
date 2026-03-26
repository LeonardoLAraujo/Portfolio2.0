import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import LPort from '../l-port';

const url = "https://script.google.com/macros/s/AKfycbw4aFJym_YTjzOdMJpysceXCeO8MpiJoX61iRGUlmBLvd73jEBAqFFZFFuUwuEUuHyCvw/exec";

@customElement('l-contact')
export default class LContact extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                max-width: 1100px;
                margin: 40px auto; /* Reduzido a margem superior no mobile */
                padding: 1rem;
                box-sizing: border-box;
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

            .comm-hub {
                background: rgba(13, 3, 22, 0.8);
                border: 2px solid rgba(98, 0, 238, 0.2);
                border-radius: 16px;
                padding: 2.5rem; /* Reduzido levemente */
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 3rem; /* Gap um pouco menor para ajudar no encaixe */
                backdrop-filter: blur(10px);
                position: relative;
                overflow: hidden;
            }

            /* Efeito de Scanline no fundo */
            .comm-hub::before {
                content: " ";
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                            linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02));
                background-size: 100% 4px, 3px 100%;
                pointer-events: none;
                z-index: 1;
            }

            .info-side {
                z-index: 2;
            }

            .info-side h2 {
                color: #fff;
                font-family: PoppinsRegular;
                font-size: 1.8rem;
                text-transform: uppercase;
                letter-spacing: 4px;
                margin-bottom: 10px;
            }

            .status-line {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #4CAF50;
                font-size: 0.8rem;
                font-weight: 900;
                margin-bottom: 30px;
            }

            .online-dot {
                width: 8px;
                height: 8px;
                background: #4CAF50;
                border-radius: 50%;
                box-shadow: 0 0 10px #4CAF50;
                animation: pulse 1.5s infinite;
            }

            /* Links Sociais */
            .social-links {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            .social-btn {
                display: inline-flex;
                align-items: center;
                gap: 12px;
                padding: 12px 20px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: #e0e0e0;
                text-decoration: none;
                font-weight: 600;
                transition: all 0.3s ease;
            }

            /* Cores das marcas no Hover */
            .social-btn.linkedin:hover {
                background: rgba(0, 119, 181, 0.15);
                border-color: #0077b5;
                color: #0077b5;
            }

            .social-btn.github:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: #ffffff;
                color: #ffffff;
            }

            .social-btn svg {
                width: 20px;
                height: 20px;
                fill: currentColor; /* O ícone herda a cor do texto automaticamente */
            }

            .social-btn.gmail:hover {
                background: rgba(234, 67, 53, 0.1);
                border-color: #ea4335;
                color: #ea4335;
            }

            /* Formulário */
            .form-side {
                z-index: 2;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .input-group {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            label {
                color: #9d46ff;
                font-size: 0.7rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            input, textarea {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 12px;
                border-radius: 4px;
                color: #fff;
                font-family: PoppinsRegular;
                transition: all 0.3s ease;
                transition: all 0.3s ease;
            }

            textarea{
                resize: none;
            }

            input:hover, textarea:hover{
                border-color: #6200ee;
            }   

            input:focus, textarea:focus {
                outline: none;
                border-color: #6200ee;
                background: rgba(98, 0, 238, 0.05);
                box-shadow: 0 0 15px rgba(98, 0, 238, 0.2);
            }

            button {
                background: #6200ee;
                color: white;
                border: none;
                padding: 15px;
                border-radius: 4px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 2px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: PoppinsBold;
            }

            button:hover {
                background: #9d46ff;
                box-shadow: 0 0 20px rgba(157, 70, 255, 0.4);
            }

            button:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .success-popup {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(13, 3, 22, 0.9);
                border: 2px solid #4CAF50;
                color: #4CAF50;
                padding: 1rem 2rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
                backdrop-filter: blur(10px);
                z-index: 9999;
                animation: slideIn 0.5s ease-out forwards;
                font-weight: bold;
            }

            @keyframes slideIn {
                from { transform: translateX(120%); }
                to { transform: translateX(0); }
            }

            @keyframes pulse {
                0% { opacity: 0.4; }
                50% { opacity: 1; }
                100% { opacity: 0.4; }
            }

            @media (max-width: 850px) {
                .comm-hub { grid-template-columns: 1fr; padding: 2rem; gap: 2rem; }
            }

            @media (max-width: 950px) {
                .comm-hub {
                    grid-template-columns: 1fr; /* Vira coluna única */
                    gap: 3rem;
                    padding: 2rem;
                }

                .info-side {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .status-line {
                    justify-content: center;
                }

                .social-links {
                    width: 100%;
                    max-width: 400px; /* Limita largura dos botões no centro */
                }
            }

            @media (max-width: 480px) {
                :host {
                    margin: 20px auto;
                    padding: 0.8rem;
                }

                .comm-hub {
                    padding: 1.5rem;
                    gap: 2rem;
                    border-radius: 12px;
                }

                .section-header {
                    margin-bottom: 2rem;
                }

                .info-side h2 {
                    font-size: 1.5rem;
                }

                .social-btn {
                    padding: 10px 15px;
                    font-size: 0.85rem;
                    flex-wrap: wrap; /* Evita que o texto do e-mail quebre o layout */
                    word-break: break-all;
                }

                button {
                    padding: 12px;
                    font-size: 0.9rem;
                }

                .success-popup {
                    top: auto;
                    bottom: 20px;
                    right: 20px;
                    left: 20px;
                    justify-content: center;
                }
            }
        `;
    }

    @state() 
    private _status: 'idle' | 'sending' | 'sent' = 'idle';

    private async _handleSubmit(e: Event) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        
        if (LPort.instancie?.lLoading) LPort.instancie.lLoading.show();
        this._status = 'sending';

        const identification = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
        const email = (form.querySelector('input[type="email"]') as HTMLInputElement).value;
        const message = (form.querySelector('textarea') as HTMLTextAreaElement).value;

        try {
            const params = new URLSearchParams();
            params.append('identification', identification);
            params.append('email', email);
            params.append('message', message);

            await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString()
            });

            this._status = 'sent';
            form.reset();
            
        } catch (error) {
            console.error("Erro na transmissão:", error);
            this._status = 'idle';
        } finally {
            setTimeout(() => {
                if (LPort.instancie?.lLoading) LPort.instancie.lLoading.hide();
                if (this._status === 'sent') {
                    setTimeout(() => { this._status = 'idle'; }, 3000);
                }
            }, 1000);
        }
    }

    protected override render(): TemplateResult {
        return html`
            <header class="section-header">
                <p>Contato</p>
                <h2>Vamos iniciar uma conexão?</h2>
            </header>

            <div class="comm-hub">
                <div class="info-side">
                    <h2>Mural de Recados</h2>
                    <div class="status-line">
                        <span class="online-dot"></span>
                        SISTEMA ONLINE - RIO GRANDE DA SERRA, SP
                    </div>
                    
                    <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-bottom: 30px;">
                        Estabeleça uma conexão direta para propostas, 
                        colaborações ou recrutamento.
                    </p>

                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo/" target="_blank" class="social-btn linkedin">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span>LinkedIn /Leonardo Leal</span>
                        </a>

                        <a href="https://github.com/LeonardoLAraujo" target="_blank" class="social-btn github">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            <span>GitHub /LeonardoLAraujo</span>
                        </a>
                        <a href="mailto:leonardoleal017@gmail.com" class="social-btn gmail">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.29 1.454-2.032 2.503-1.246L12 11.244l9.497-7.033c1.05-.786 2.503-.044 2.503 1.246z"/>
                            </svg>
                            <span>leonardoleal017@gmail.com</span>
                        </a>
                    </div>
                </div>

                <form class="form-side" @submit="${this._handleSubmit}">
                    <div class="input-group">
                        <label>Identificação (Nome/Empresa)</label>
                        <input type="text" placeholder="Ex: Corporação Nexus" required>
                    </div>

                    <div class="input-group">
                        <label>Canal de Resposta (E-mail)</label>
                        <input type="email" placeholder="seu@email.com" required>
                    </div>

                    <div class="input-group">
                        <label>Transmissão (Mensagem)</label>
                        <textarea rows="4" placeholder="Escreva sua mensagem aqui..." required></textarea>
                    </div>

                    <button type="submit" ?disabled="${this._status !== 'idle'}">
                        ${this._status === 'idle' ? 'Enviar Mensagem' : 
                          this._status === 'sending' ? 'Transmitindo...' : 'Mensagem Recebida! ✅'}
                    </button>
                </form>
            </div>

            ${this._status === 'sent' ? html`
                <div class="success-popup">
                    <span style="font-size: 1.5rem;">✅</span>
                    <div>
                        <strong style="display: block;">Transmissão Concluída!</strong>
                        <span style="font-size: 0.8rem; color: rgba(76, 175, 80, 0.8);">Sua mensagem foi entregue com sucesso.</span>
                    </div>
                </div>
            ` : ''}
        `;
    }
}