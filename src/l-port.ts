import { LitElement, html, css, TemplateResult, CSSResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';
import "./pages/l-home";
import "./components/l-menu";
import "./pages/l-project"; 
import "./pages/l-tech-stack";
import "./pages/l-stats";
import "./pages/l-journey";
import "./pages/l-skills";
import "./pages/l-contact";
import "./components/l-footer";
import "./components/l-loading";
import { LLoading } from './components/l-loading';

@customElement('l-port')
export default class LPort extends LitElement {

    static override get styles(): CSSResult {
        return css`
            :host {
                display: block;
                background-color: #0d0316; 
                min-height: 100vh;
                position: relative;
                overflow-x: hidden;
                position: relative;
            }

            /* Estilização do Canvas com suporte a Paralaxe */
            #star-canvas {
                position: fixed;
                top: 0;
                left: 0;
                /* Usamos vw/vh para garantir que ele ignore o tamanho dos elementos pais */
                width: 100vw; 
                height: 200vh; /* Mantemos maior para o efeito de paralaxe */
                z-index: 0;
                pointer-events: none;
                will-change: transform;
                /* Garante que o canvas não tenha gaps estranhos */
                display: block; 
            }

            .port {
                position: relative;
                width: 100%;
                z-index: 2;
            }

            main {
                display: flex;
                flex-direction: column;
                gap: 80px;
                scroll-behavior: smooth
            }
        `;
    }

    public static instancie: LPort;

    private _rive?: Rive;

    private _isManualScrolling = false;
    private _scrollTimeout?: number;

    @query('#star-canvas')
    private _canvasElement!: HTMLCanvasElement;

    @query('#main-menu')
    private _menuElement!: any;

    @query("l-loading")
    lLoading!: LLoading;

    override connectedCallback(): void {
        super.connectedCallback();

        LPort.instancie = this;
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        this._rive?.cleanup(); // Evita vazamento de memória do canvas
        window.removeEventListener('scroll', this.initParallax); 
        // Nota: Para remover, a função do scroll deve estar em uma variável nomeada
    }

    protected override firstUpdated(): void {
        this.initRive();
        this.initParallax();
        this.initScrollObserver();
    }

    private initScrollObserver() {
        // Reduzimos o threshold para 0.2 (20% de visibilidade)
        // A rootMargin negativa "encolhe" a área de detecção para o centro da tela
        const options = { 
            threshold: 0.2,
            rootMargin: "-10% 0px -40% 0px" 
        };

        const observer = new IntersectionObserver((entries) => {
            if (this._isManualScrolling) return;

            entries.forEach(entry => {
                // No mobile, várias seções podem "cruzar" a tela ao mesmo tempo
                // isIntersecting garante que estamos pegando a que está entrando na área
                if (entry.isIntersecting) {
                    this._menuElement?.setActiveBySectionId(entry.target.id);
                }
            });
        }, options);

        this.shadowRoot?.querySelectorAll('main > *[id]').forEach(section => {
            observer.observe(section);
        });
    }

    private initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            // Pegamos a altura total que pode ser scrollada
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            // Se o canvas tem 200vh e a tela tem 100vh, temos 100vh de folga.
            // Vamos fazer o canvas se mover proporcionalmente ao scroll total da página.
            const scrollFraction = scrolled / maxScroll;
            
            // Movemos o canvas no máximo 100vh (a folga que ele tem)
            const moveAmount = scrollFraction * window.innerHeight;

            if (this._canvasElement) {
                // Usamos translate3d para forçar aceleração de hardware (GPU)
                this._canvasElement.style.transform = `translate3d(0, -${moveAmount}px, 0)`;
            }
        });
    }

    private async initRive() {
        if (!this._canvasElement || this._rive) return;

        this._rive = new Rive({
            src: '/animations/star.riv',
            artboard: "Artboard",
            canvas: this._canvasElement,
            stateMachines: "State Machine 1",
            layout: new Layout({
                fit: Fit.Cover,
                alignment: Alignment.Center
            }),
            isTransparent: true, 
            autoplay: true,
            onLoad: () => {
                this._rive?.resizeDrawingSurfaceToCanvas();
            }
        } as any);

        window.addEventListener('resize', () => {
            this._rive?.resizeDrawingSurfaceToCanvas();
        });
    }

    private _onMenuClick(e: CustomEvent) {
        const section = this.shadowRoot?.getElementById(e.detail.id);
        if (section) {
            // ATIVA O LOCK: Ignora o observer
            this._isManualScrolling = true;

            // Atualiza o menu IMEDIATAMENTE para o destino (feedback instantâneo)
            this._menuElement?.setActiveBySectionId(e.detail.id);

            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // DESATIVA O LOCK após a animação terminar (aprox. 800ms a 1s)
            window.clearTimeout(this._scrollTimeout);
            this._scrollTimeout = window.setTimeout(() => {
                this._isManualScrolling = false;
            }, 1000); 
        }
    }

    protected override render(): TemplateResult {
        return html`
            <canvas id="star-canvas"></canvas>

            <l-loading></l-loading>

            <div class="port">
                <l-menu 
                    id="main-menu" 
                    @menu-click=${this._onMenuClick}>
                </l-menu>
                
                <main>
                    <l-home id="stats"></l-home>
                    <l-stats></l-stats>
                    <l-skills id="skills"></l-skills>
                    <l-tech-stack id="tech-stack"></l-tech-stack>
                    <l-journey id="journey"></l-journey>
                    <l-projects id="projects"></l-projects>
                    <l-contact id="contact"></l-contact>
                    <l-footer></l-footer>
                </main>
            </div>
        `;
    }
}