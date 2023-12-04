import FilterMenuStyle from './FilterMenu-style'

class FilterMenu extends HTMLElement {
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
        const style = FilterMenuStyle;
        this.shadowDOM.innerHTML = `
        ${style}
        <ul class="filter-wrapper">
            <li><label><input type="checkbox" id="best-deal" value="Best Deal"> Best Deal</label></li>
            <li><label><input type="checkbox" id="ratings" value="Ratings"> Ratings</label></li>
            <li><label><input type="checkbox" id="store-steam" value="1"> Steam<label></li>
            <li><label><input type="checkbox" id="price" value="Price"> Price</label></li>
        </ul>
        `
    }
}
customElements.define('filter-menu', FilterMenu);
