class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer tabindex="0">
                <ul>
                    <li>&copy; Raehan Ramadhan | 2023</li>
                </ul>
            </footer>
        `;
  }
}

customElements.define('app-footer', Footer);
