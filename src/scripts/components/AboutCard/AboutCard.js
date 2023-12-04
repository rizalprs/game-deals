import AboutStyle from './About-style'
import API_ENDPOINT from '../../global/api-endpoint';

class AboutCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open',
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = AboutStyle;
        const storeLogo = `${API_ENDPOINT.LIST_STORES_BANNER}`
        this.shadowDOM.innerHTML = `
        ${style}
        <div class="about-wrapper" id="about-card">
            <h1>About</h1>
            <blockquote>"We Need More Sale"</blockquote>
            <p class="about-text">This website is made for gamers that need the best deals from many game stores.</p>
            <div class="stores-wrapper">
                <ul class="store-list-wrapper">
                    <li class="store-list"><img src="${storeLogo}0.png" alt="steam-logo"></li>
                    <li class="store-list"><img src="${storeLogo}24.png" alt="epic-store-logo"></li>
                    <li class="store-list"><img src="${storeLogo}10.png" alt="humble-store-logo"></li>
                    <li class="store-list"><img src="${storeLogo}2.png" alt="green-man-logo"></li>
                    <li class="store-list"><img src="${storeLogo}7.png" alt="origin-logo"></li>
                    <li class="store-list"><img src="${storeLogo}6.png" alt="gog-logo"></li>
                </ul>
            </div>
            <p class="about-text">It is use API from <a href="${API_ENDPOINT.BASE}" target="_blank">${API_ENDPOINT.BASE}</a>.</p>
        </div>
        `;
    }
}
customElements.define('about-card', AboutCard);
