class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav>
                <div class="menu-mobile">
                    <div>
                        <a href="/" class="logo">Han Katalog Restoran</a>
                    </div>

                    <div class="menu-container">
                        <button type="button" class="menu" aria-label="button menu dropdown on mobile">
                            <span class="fa fa-bars"></span>
                        </button>
                    </div>
                </div>

                <ul class="nav-list">
                    <li class="nav-item"><a href="/">Home</a></li>
                    <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/raehanramadhan_/">About</a></li>
                </ul>
            </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
