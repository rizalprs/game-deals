const style = `
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :host {
        display: block;
        width: 100%;
        background-color: #24252a;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    nav {
        display: flex;
        gap: 20%;
        justify-content: space-between;
        align-items: center;
        padding: 20px 5%;
    }

    .logo-wrapper{
        padding: 14px;
    }

    .logo-img {
        background-color: white;
    }

    h2 {
        width: 100px;
        font-size: 12px;
    }
    
    .nav-links-wrapper {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 100%;
    }

    .game-search-box{
        display: flex;
        align-items: stretch;
        width: 100%;
    }
    
    .search-btn{
        width: 100%;
    }

    .search-control{
        padding: 0 1rem;
        width: 100%;
        font-size: 1.1rem;
        outline: 0;
        border: 1px solid white;
        background: #24252a;
        color: white;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    
    .search-control::placeholder{
        color: white;
    }

    .search-btn{
        width: 55px;
        height: 55px;
        font-size: 1.8rem;
        background: white;
        color: #fff;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }

    .search-btn img {
        width: 50%;
    }

    .nav_links {
        list-style: none;
        margin: auto;
        width: 100%;
    }

    .nav_links li {
        display: inline-block;
        padding: 0px 20px;
    }

    li,
    a {
        font-family: sans-serif;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
        color: white;
    }

    #sign-up {
        color: #24252a;
        background-color: white;
        padding: 10px;
        border-radius: 5px;
    }

    @media (max-width: 1208px) {
        nav {
            gap: 10%;
        }
    }

    @media (max-width: 990px) {
        nav {
            flex-direction: column;
        }

        .game-search-box {
            width: 70%;
            margin: auto;
        }
        .nav-links-wrapper {
            flex-direction: column-reverse;
            justify-content: center;
            gap: 25px;
            padding: 0;
        }

    }

    @media (max-width: 586px) {
        .nav-links-wrapper {
            padding: 0;
        }

    }

    </style>
`

export default style
