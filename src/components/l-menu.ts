import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import "ecv-component";
import { IconTypes } from 'ecv-component';

@customElement('l-menu')
export default class LMenu extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            /* Container Mobile First */
            .lmenu {
                position: fixed;
                bottom: 15px; 
                left: 50%;
                transform: translateX(-50%);
                z-index: 100;
                background: rgba(13, 3, 22, 0.75);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                padding: 6px;
                border-radius: 20px;
                border: 1px solid rgba(157, 70, 255, 0.2);
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
                width: 92%;
                max-width: 420px;
            }

            .lmenu__links {
                display: flex;
                align-items: center;
                justify-content: space-around;
                gap: 4px;
            }

            .links__icons {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                cursor: pointer;
                color: #fff;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 1px solid transparent;
            }

            .links__icons:hover {
                transform: translateY(-5px);
                background-color: rgba(255, 255, 255, 0.15);
            }

            .links__icons[active] {
                background-color: #6200ee;
                color: #fff;
                transform: scale(1.1);
                box-shadow: 0 0 15px rgba(98, 0, 238, 0.4);
                border-color: rgba(255, 255, 255, 0.2);
            }

            ecv-icon {
                font-size: 18px;
            }

            /* Ajustes para Desktop */
            @media (min-width: 1024px) {
                .lmenu {
                    width: fit-content;
                    max-width: none;
                    bottom: auto;
                    top: 20px;
                    border-radius: 50px;
                    padding: 8px;
                    background: rgba(255, 255, 255, 0.1);
                }

                .lmenu__links {
                    gap: 12px;
                    justify-content: center;
                    padding: 4px;
                }

                .links__icons {
                    width: 48px;
                    height: 48px;
                    background-color: rgba(255, 255, 255, 0.8);
                    color: #0d0316;
                    border-radius: 16px;
                }

                ecv-icon {
                    font-size: 20px;
                }
            }
        `;
    }

    @state()
    private _activeIndex = 0;

    private _listOptions = [
        { text: "Status", icon: IconTypes.Person, id: 'stats' }, 
        { text: "Skills", icon: "code_xml" as IconTypes, id: 'skills' },
        { text: "Stack", icon: "stacks" as IconTypes, id: 'tech-stack' },
        { text: "Trajetória", icon: "cases" as IconTypes, id: 'journey' },
        { text: "Projetos", icon: "folder_open" as IconTypes, id: 'projects' },
        { text: "Contato", icon: IconTypes.Mail, id: 'contact' },
    ];

    private _handleNav(index: number) {
        const sectionId = this._listOptions[index].id;
        
        this.dispatchEvent(new CustomEvent('menu-click', { 
            detail: { id: sectionId, index },
            bubbles: true, 
            composed: true 
        }));
    }
    public setActiveBySectionId(id: string) {
        const index = this._listOptions.findIndex(opt => opt.id === id);
        if (index !== -1) this._activeIndex = index;
    }

    protected override render(): TemplateResult {
        return html`
            <nav class="lmenu">
                <div class="lmenu__links">
                    ${this._listOptions.map((menu, index) => html`
                        <div 
                            class="links__icons" 
                            ?active=${this._activeIndex === index}
                            @click=${() => this._handleNav(index)}
                            title=${menu.text}
                        >
                            <ecv-icon .icon=${menu.icon} ?filled=${true}></ecv-icon>
                        </div>
                    `)}
                </div>
            </nav>
        `;
    }
}