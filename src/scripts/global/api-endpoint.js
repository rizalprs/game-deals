const API_ENDPOINT = {
    BASE: 'https://www.cheapshark.com',
    LIST_DEALS: 'https://www.cheapshark.com/api/1.0/deals?onSale=1&pageSize=12',
    LIST_GAME_INFO: 'https://www.cheapshark.com/redirect?dealID=',
    LIST_STORES: 'https://www.cheapshark.com/api/1.0/stores',
    LIST_STORES_BANNER: 'https://www.cheapshark.com/img/stores/banners/',
    LIST_STORES_LOGO: 'https://www.cheapshark.com/img/stores/logos/',
    LIST_DEALS_BY_TITLE: (title) => `https://www.cheapshark.com/api/1.0/deals?onSale=1&pageSize=12&title=${title}`,
};

export default API_ENDPOINT;
