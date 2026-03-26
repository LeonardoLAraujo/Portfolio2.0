import { LitElement, html, css, CSSResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-loading')
export class LLoading extends LitElement {
    
    static override get styles(): CSSResult {
        return css`
            :host {
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                /* Ocupa a tela inteira */
                position: fixed;
                inset: 0; /* Atalho para top, right, bottom, left: 0 */
                width: 100vw;
                height: 100vh;
                z-index: 9999; /* Garante que fique acima de tudo */

                /* Efeito de Fundo: Opacidade + Blur */
                background: rgba(18, 9, 29, 0.7); /* Fundo escuro seguindo sua paleta */
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px); /* Suporte para Safari */

                padding: 20px;
                box-sizing: border-box;
            }

            .loading-gif {
                width: 150px;
                height: auto;
                filter: drop-shadow(0 0 15px rgba(157, 70, 255, 0.6));
                animation: fadeIn 0.4s ease-out;
            }

            p{
                color: #fff;
                font-family: PoppinsBold;
                text-align: center;
                font-size: 20px;
            }

            @keyframes fadeIn {
                from { 
                    opacity: 0; 
                    transform: scale(0.8); 
                }
                to { 
                    opacity: 1; 
                    transform: scale(1); 
                }
            }
        `;
    }

    private _body = document.querySelector("body");

    public show(): void{
        this._body!.style!.overflow = "hidden";
        this.style.display = "flex";
    }

    public hide(): void{
        this._body!.style!.overflow = "auto";
        this.style.display = "none";
    }

    protected override render() {
        // Usando o GIF do Nano Banana que você já tem no modal
        return html`
            <img 
                src="https://media.tenor.com/KsIHk9tptf8AAAAi/thinking-hmm.gif"
                class="loading-gif"
            />
            <p>Carregando</p>
        `;
    }
}