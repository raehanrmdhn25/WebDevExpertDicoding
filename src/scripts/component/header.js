class HeaderContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="header-text" tabindex="0">
                <h1 class="header-title">Selamat Datang</h1>
                <p class="header-subtitle">
                    Kami menghadirkan berbagai macam restoran
                </p>
                <a href="#main-content" class="button">Selengkapnya</a>
            </div>
        `;
  }
}

customElements.define('header-content', HeaderContent);
