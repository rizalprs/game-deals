import axios from 'axios';
import API_ENDPOINT from '../../global/api-endpoint';
import loading from '../../UI/loading';
import ListCardStyle from './ListCard-style';
import wishlistLogo from '../../UI/logo/wishlist-btn.svg';
import arrowBtn from '../../UI/logo/arrow-forward-btn.svg'

class ListCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open',
        });
    }

    async connectedCallback() {
        this.filterMenuComponent = document.querySelector('filter-menu');
        this.appBarComponent = document.querySelector('app-bar');

        try {
            this.loading();
            this.getDeals = await axios.get(API_ENDPOINT.LIST_DEALS);
            this.innerHTML = '';
            this.render();
        } catch (error) {
            this.errorMessage(error);
        }

        const filterWrapper = this.filterMenuComponent.shadowRoot.querySelector('.filter-wrapper');
        const filterCheckbox = filterWrapper.querySelectorAll('input[type="checkbox"]');
        filterCheckbox.forEach((checkbox) => {
            checkbox.addEventListener('change', this.filterGameHandler.bind(this));
        });
    }

    async searchGameHandler() {
        const searchInput = this.appBarComponent.shadowRoot.querySelector('.search-control');

        try {
            this.loading();
            this.getDeals = await axios.get(API_ENDPOINT.LIST_DEALS_BY_TITLE(searchInput.value));
            this.innerHTML = '';
            this.render();
        } catch (error) {
            this.errorMessage(error);
        }
    }

    async filterGameHandler() {
        const filterWrapper = this.filterMenuComponent.shadowRoot.querySelector('.filter-wrapper');
        const filterCheckbox = filterWrapper.querySelectorAll('input[type="checkbox"]');
        const filterCheckboxValue = [];
        filterCheckbox.forEach((checkbox) => {
            if (checkbox.checked) {
                filterCheckboxValue.push(checkbox.value);
            }
        });

        let params = '';
        let sort = '';

        filterCheckboxValue.forEach((value) => {
            if (
                value === 'Best Deal' || value === 'Ratings' || value === 'Price'
            ) {
                sort += `${value}+`;
            }

            if (value === '1') {
                params += `&storeID=${value}`;
            }
        });
        params += `&sort=${sort || 'Best Deal'}&desc=0`;

        try {
            this.loading();
            this.getDeals = await axios.get(`${API_ENDPOINT.LIST_DEALS}${params}`);
            this.innerHTML = '';
            this.render();
        } catch (error) {
            this.errorMessage(error);
        }
    }

    render() {
        this.shadowDOM.innerHTML = `
        <ul>
        ${this.getDeals.data.map((game) => {
            const style = ListCardStyle;
            const storeLogo = `${API_ENDPOINT.LIST_STORES_LOGO}${(game.storeID - 1)}`;
            const storeBanner = `${API_ENDPOINT.LIST_STORES_BANNER}${(game.storeID - 1)}`
            const gameInfo = `${API_ENDPOINT.LIST_GAME_INFO}${game.dealID}`;
            const gameSale = `${Math.floor(100 - ((game.salePrice / game.normalPrice) * 100))}%`
            return `
            ${style}
            <li id="game-list" class="game-list-wrapper">
                <button type="button" class="wishlist-btn" id="wishlist-btn">
                    <img src="${wishlistLogo}" alt="wishlist-button">
                </button>
                <a href="https://www.youtube.com/results?search_query=${game.title}+trailer" target="_blank"><img src="${game.thumb}" class="game-thumb" alt="${game.title}"></a>
                <a href="${gameInfo}" target="_blank"><h2 class="game-title">${game.title}</h2></a>
                <div class="detail-wrapper">
                    <div class="sale-wrapper">
                        <div class="detail-price">
                            <p class="normal-price">$${game.normalPrice}</p>
                            <p class="sale-price">$${game.salePrice}</p>
                        </div>
                        <p class="game-sale">${gameSale}</p>
                    </div>
                    <a href="${storeBanner}.png" target="_blank"><img src="${storeLogo}.png" class="store-icon" alt="store-icon"></a>
                </div>
            </li>`;
        }).join('')}
        </ul>
        <div class="page-number-wrapper">
            <img src="${arrowBtn}" class="arrow-btn left-btn" alt="back-button">
            <p class="page-number">
            1 of 5
            </p>
            <img src="${arrowBtn}" class="arrow-btn alt="forward-button">
        </div>
        `;
        const buttonSearchInput = this.appBarComponent.shadowRoot.querySelector('.search-btn');

        buttonSearchInput.addEventListener('click', this.searchGameHandler.bind(this));
    }

    loading() {
        this.shadowDOM.innerHTML = loading();
    }

    errorMessage(error) {
        this.shadowDOM.innerHTML = `<h2>${error}</h2>`;
    }
}

customElements.define('list-card', ListCard);
