import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-project-card')
export default class LProjectCard extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                perspective: 1000px;
                position: relative;
            }

            .card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                overflow: hidden;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
                height: 100%;
                display: flex;
                flex-direction: column;
                color: white;
            }

            .card:hover {
                transform: translateY(-10px) rotateX(2deg);
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            }

            .thumb {
                width: 100%;
                height: 180px;
                background-size: cover;
                background-position: center;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .content {
                padding: 1.5rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            h3 {
                margin: 0;
                font-size: 1.4rem;
                font-weight: 700;
                color: #fff;
            }

            p {
                margin: 0;
                font-size: 0.9rem;
                color: #ccc;
                line-height: 1.5;
            }

            .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: auto;
                padding-top: 15px;
            }

            .tag {
                font-size: 0.7rem;
                background: rgba(98, 0, 238, 0.2);
                color: #bb86fc;
                padding: 4px 10px;
                border-radius: 8px;
                border: 1px solid rgba(98, 0, 238, 0.3);
                font-weight: bold;
                text-transform: uppercase;
            }

            .link-icon {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.5);
                width: 35px;
                height: 35px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s;
            }

            .card:hover .link-icon {
                opacity: 1;
            }
        `;
    }

    @property({ type: String }) 
    override title = "Nome do Projeto";

    @property({ type: String }) 
    resume = "Uma breve descrição do que você desenvolveu neste projeto.";

    @property({ type: String }) 
    thumb = ""; 

    @property({ type: Array }) 
    tags: any[] = []; 

    @property({ type: String }) 
    link = "#";

    protected override render(): TemplateResult {
        return html`
            <a target="_blank" style="text-decoration: none;">
                <div class="card">
                    <div class="thumb" style="background-image: url('${this.thumb || 'https://via.placeholder.com/400x200'}')">
                        <div class="link-icon">🔗</div>
                    </div>
                    <div class="content">
                        <h3>${this.title}</h3>
                        <p>${this.resume}</p>
                        <div class="tags">
                            ${this.tags.map(tag => html`<span class="tag">${tag}</span>`)}
                        </div>
                    </div>
                </div>
            </a>
        `;
    }
}