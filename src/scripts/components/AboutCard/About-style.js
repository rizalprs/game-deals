const style = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.about-wrapper {
    margin: 20px auto 100px auto;
    width: 80vw;
    background-color: #16202d;
    color: white;
    padding: 10px;
}

h1 {
    margin: 25px auto;
    color: white;
    text-transform: uppercase;
    cursor: default;
}

blockquote {
    font-size: 30px;
}

.about-text {
    width: 80%;
    margin: 20px auto;
    padding: 10px;
}

.about-text a {
    text-decoration: none;
    color: white;
}

.store-list-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    justify-content: space-between;
}

.store-list {
    list-style: none;
    margin: 30px auto;
}

@media (max-width: 600px){
    .store-list-wrapper {
        display: inline-block;
    }
}

@media screen and (max-width: 992px) {
    .store-list-wrapper {
        display: inline-block;
    }
}

</style>
`

export default style
