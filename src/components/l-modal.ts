import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-modal')
export default class LModal extends LitElement {
    
    static override get styles(): CSSResult {
        return css`
            :host {
                display: contents;
            }

            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 5, 15, 0.8); /* Escuro profundo */
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                z-index: 10000; 
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                pointer-events: none;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            :host([open]) .modal-overlay {
                opacity: 1;
                pointer-events: auto;
            }

            .modal-container {
                width: 95%;
                max-width: 900px;
                max-height: 85vh;
                position: relative;
                overflow-y: auto;
                outline: none;
                
                /* Animação de entrada */
                transform: scale(0.95) translateY(30px);
                transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            :host([open]) .modal-container {
                transform: scale(1) translateY(0);
            }

            /* Botão de fechar minimalista e flutuante */
            .close-btn {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                width: 44px;
                height: 44px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                font-size: 24px;
                z-index: 10001;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
            }

            .close-btn:hover {
                background: #9d46ff;
                transform: rotate(90deg);
                border-color: #9d46ff;
            }

            .modal-body {
                width: 100%;
                height: 100%;
            }

            /* Custom scrollbar estilizada */
            .modal-container::-webkit-scrollbar {
                width: 6px;
            }
            .modal-container::-webkit-scrollbar-track {
                background: transparent;
            }
            .modal-container::-webkit-scrollbar-thumb {
                background: rgba(157, 70, 255, 0.4);
                border-radius: 10px;
            }
            .modal-container::-webkit-scrollbar-thumb:hover {
                background: #9d46ff;
            }

            @media (max-width: 768px) {
                .close-btn {
                    top: 15px;
                    right: 15px;
                    width: 38px;
                    height: 38px;
                }
            }
        `;
    }

    @property({ type: Boolean, reflect: true }) 
    open = false;

    private _close() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('modal-closed', { 
            bubbles: true, 
            composed: true 
        }));
    }

    protected override render(): TemplateResult {
        return html`
            <div class="modal-overlay" @click=${this._close}>
                <button class="close-btn" @click=${this._close} title="Fechar">
                    &times;
                </button>
                
                <div class="modal-container" @click=${(e: Event) => e.stopPropagation()}>
                    <div class="modal-body">
                        <slot></slot> 
                    </div>
                </div>
            </div>
        `;
    }
}