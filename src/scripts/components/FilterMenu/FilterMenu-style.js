const style = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    margin: 30px 20px;
    color: white;
    text-align: left;
    border: solid 2px white;
    width: 200px;
    height: 200px;
    background-color: #16202d;
}

li {
    list-style: none;
    margin: 20px;
}

label,
input {
    cursor: pointer;
}

@media (max-width: 1100px) {
    ul {
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        width: 100%;
        height: auto;
    }
}

@media (max-width: 658px) {
    ul {
        width: 50%;
        display: inline-block;
    }
}
</style>
`

export default style
