const style = `
    <style>

    ul {
        margin: 20px auto;
        width: 100%;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    li {
        color: white;
        background-color: #16202d;
        width: 250px;
        height: 250px;
        list-style: none;
        margin: 10px;
        border: white solid 2px;
        overflow: hidden;
        position: relative;
        cursor: default;
    }

    .wishlist-btn {
        background-color: transparent;
        border: none;
        position: absolute;
        text-align: center;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    .off {
        display: none;
    }

    .wishlist-btn img {
        width: 20px;
        background-color: white;
        border-radius: 50%;
        padding: 2px 2px 1px 2px
    }

    .game-thumb {
        width: 250px;
        height: 100px;
        object-fit: cover;
    }

    .game-title {
        font-size: 12px;
        margin: 10px;
        text-transform: uppercase;
        text-align: left;
        color: white;
    }

    a {
        text-decoration: none;
    }

    .detail-wrapper {
        position: absolute;
        margin: 0 10px;
        bottom: 5px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
    }

    .sale-wrapper {
        display: flex;
        margin-right: 50px;
    }

    .detail-price {
        margin-right: 20px;
        height: 20px;
        text-align: left;
        position: relative;
    }

    .normal-price {
        font-size: 10px;
        position: absolute;
        top: 12px;
        opacity: 0.5;
        text-decoration: line-through;
    }

    .sale-price {
        font-size: 14px;
        position: absolute;
        top: 25px;
        font-weight: 500;
    }

    .game-sale {
        font-size: 20px;
        margin-left: 35px;
        padding: 5px;
        background-color: green;
        border-radius: 5px;
        font-weight: 500;
    }

    .store-icon {
        position: absolute;
        box-shadow: 0px 0px 2px black;
        border-radius: 50%;
        margin: auto;
        width: 30px;
        top: 25px;
        right: 5px;
    }

    .page-number-wrapper {
        margin: 10px auto 30px auto;
        display: flex;
        justify-items: center;
        width: 150px;
        text-align: center;
        padding-left: 40px;
    }

    .arrow-btn {
        width: 20px;
        height: 20px;
        margin: 10px auto;
        background-color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    .left-btn {
        transform: scaleX(-1);
    }

    .page-number {
        color: white;
        font-size: 15px;
        margin: 10px;
    }

    @media (max-width: 822px) {
        ul {
            grid-template-columns: 1fr 1fr;
        }

        .page-number-wrapper {
            padding: 0;
        }
    }

    @media (max-width: 568px) {
        ul {
            grid-template-columns: 1fr;
        }
    }

    </style>
    `

export default style