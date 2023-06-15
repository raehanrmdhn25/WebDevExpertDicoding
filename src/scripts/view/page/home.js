import Spinner from '../template/spinner';
import RestaurantSource from '../../data/restaurant-source';
import RestaurantCard from '../template/restaurant-card';
import { initSwalError } from '../../utils/swal-initiator';

const Home = {
  async render() {
    return `
            <div class="container">
                <div id="loading"></div>
                <div id="main-container">
                    <h1 tabindex="0" class="main-content-title" >Katalog Restoran</h1>
                    <section id="restaurant"></section>
                </div>
            </div>
        `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#main-container');
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#restaurant');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantList();

      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += RestaurantCard(restaurant);
      });

      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (ex) {
      console.error(ex);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error : ${ex.message}`;
      initSwalError(ex.message);
    }
  },
};

export default Home;
