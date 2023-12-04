const style = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.contact-wrapper {
    width: 100%;
    background-color: #24252a;
    color: white;
    box-shadow: 1px -1px 8px rgba(0, 0, 0, 0.2);
}

h1 {
    padding: 25px 0 20px 0;
    text-transform: uppercase;
}

.contact-list-wrapper {
    display: flex;
    margin: auto;
    padding: 15px 0;
    justify-items: center;
    width: 300px;
    flex-direction: space-around;
}

.contact-list {
    list-style: none;
    margin: auto;
}

.contact-list img {
    display: inline-block;
    width: 50px;
    background-color: white;
    border-radius: 50%;
}

.copyright-text {
    padding: 20px 0 20px 0;
}
</style>
`
export default style
