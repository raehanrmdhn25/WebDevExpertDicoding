import FavoriteRestaurantIDB from '../../data/restaurant-idb';
import RestaurantCard from '../template/restaurant-card';

const Favorite = {
  async render() {
    return `
            <div class="container" id="skip-content">
                <h2 class="title-container">Favorited Restaurant</h2>
                <section id="favorite-restaurant"></section>
            </div>
        `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#skip-content');
    const data = await FavoriteRestaurantIDB.getAllRestaurant();
    const favoriteRestaurantContainer = document.querySelector('#favorite-restaurant');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });

    if (data.length === 0) {
      favoriteRestaurantContainer.innerHTML = `
          Page Favorited Restaurant is Empty.
      `;
    }

    data.forEach((restoran) => {
      favoriteRestaurantContainer.innerHTML += RestaurantCard(restoran);
    });
  },
};

export default Favorite;
