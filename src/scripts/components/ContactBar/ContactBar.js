import githubLogo from '../../UI/logo/github.png'
import instagramLogo from '../../UI/logo/Instagram.png'
import linkedIn from '../../UI/logo/Linkedin.png'
import ContactBarStyle from './ContactBar-style'

class ContactBar extends HTMLElement {
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
        const style = ContactBarStyle;
        this.shadowDOM.innerHTML = `
        ${style}
        <div class="contact-wrapper">
            <h1>Find Me</h1>
            <ul class="contact-list-wrapper">
                <li class="contact-list"><a href="https://github.com/rizalprs" target="_blank"><img src="${githubLogo}" alt="github-logo"></a></li>
                <li class="contact-list"><a href="https://www.instagram.com/rizalprs/" target="_blank"><img src="${instagramLogo}" alt="instagram-logo"></a></li>
                <li class="contact-list"><a href="https://www.linkedin.com/in/rizal-prasetya/" target="_blank"><img src="${linkedIn}" alt="linkedin-logo"></a></li>
            </ul>
            <p class="copyright-text">Copyright &copy; 2022 CheapShark. All Rights Reserved. Created by Rizal Prasetya.</p>
        </div>
        `;
    }
}
customElements.define('contact-bar', ContactBar);
