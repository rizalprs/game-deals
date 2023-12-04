import logo from '../../UI/logo/logo.svg'
import search from '../../UI/logo/search-btn.svg'
import AppBarStyle from './AppBar-style'

class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open',
        });
    }

    connectedCallback() {
        this.renderAppBar();
    }

    renderAppBar() {
        const style = AppBarStyle;
        this.shadowDOM.innerHTML = `
        ${style}
        <nav>
            <div class="logo-wrapper">
                <img class="logo-img" src="${logo}" alt="logo-img">
                <h2>Game Deals</h2>
            </div>
            <div class="nav-links-wrapper">
                <div class = "game-search-box">
                    <input type = "text" class = "search-control" placeholder="Enter a game title" id = "search-input">
                    <button type = "submit" class = "search-btn btn" id = "search-btn">
                        <img src="${search}" alt="search-button">
                    </button>
                </div>
                <ul class="nav_links">
                    <li><a href="#">Deals</a></li>
                    <li><a href="#about-card">About</a></li>
                    <li><a href="#" id="sign-up">Sign Up</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}
customElements.define('app-bar', AppBar);
