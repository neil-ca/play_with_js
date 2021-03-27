class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        <p> Hello <p>
        <h1>this is amazing</h1>
        <h3>my man</h3>
        ${this.getStyles()}
    `
        return template
    }
    getStyles() {
        return `
        <style>
            p {
                color: green;
            }
            h3 {
                color: red;
            }
        </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('my-element', myElement)