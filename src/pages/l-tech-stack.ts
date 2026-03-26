import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('l-tech-stack')
export default class LTechStack extends LitElement {
    
    @property({ type: Array }) 
    technologies = [
        { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
        { name: 'LitElement', icon: 'https://codesandbox.io/api/v1/sandboxes/m9467r/screenshot.png' },
        { name: 'PocketBase', icon: 'https://pocketbase.io/images/logo.svg' },
        { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { name: 'Mysql', icon: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
        { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'Godot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/godot/godot-original.svg' },
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    ];

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                width: 100%;
                position: relative;
                padding: 4rem 0;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                overflow: hidden;
            }

            /* Rótulo Explicativo */
            .stack-label {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background: #6200ee;
                color: white;
                font-size: 0.7rem;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 2px;
                padding: 6px 16px;
                border-radius: 0 0 12px 12px;
                z-index: 2;
                box-shadow: 0 4px 10px rgba(98, 0, 238, 0.3);
            }

            .marquee {
                display: flex;
                overflow: hidden;
                mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }

            .marquee-inner {
                display: flex;
                width: max-content;
                animation: scroll 40s linear infinite;
            }

            .track {
                display: flex;
                align-items: center;
                gap: 4rem;
                padding: 0 2rem;
            }

            .tech-item {
                display: flex;
                align-items: center;
                gap: 15px;
                opacity: 0.5;
                transition: all 0.3s ease;
                filter: grayscale(1);
                cursor: default;
            }

            .tech-item:hover {
                opacity: 1;
                filter: grayscale(0);
                transform: scale(1.1);
            }

            .tech-item img {
                width: 32px;
                height: 32px;
                object-fit: contain;
            }

            .tech-item span {
                color: white;
                font-size: 1.2rem;
                font-weight: 600;
            }

            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }

            @media (max-width: 768px) {
                .stack-label { font-size: 0.6rem; padding: 4px 12px; }
                .track { gap: 2.5rem; }
            }
        `;
    }

    protected override render(): TemplateResult {
        const doubleTech = [...this.technologies, ...this.technologies];

        return html`
            <div class="stack-label">Main Tech Stack</div>
            
            <div class="marquee">
                <div class="marquee-inner">
                    <div class="track">
                        ${doubleTech.map(tech => html`
                            <div class="tech-item">
                                <img src="${tech.icon}" alt="${tech.name}">
                                <span>${tech.name}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }
}