const template = document.createElement('div')
template.innerHTML = `
    <style>
        p {
            color: green;
        }
        h3 {
            color: red;
        }
    </style>
    <p> Hello <p>
    <h1>this is amazing</h1>
    <h3>my man</h3>
`
class myElement extends HTMLElement {
    constructor() {
        super()
        // console.log("Hey")
        this.p = document.createElement('p')
    }
    connectedCallback() {
        this.p.textContent = "Hello this is an p"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}
customElements.define('my-element', myElement)