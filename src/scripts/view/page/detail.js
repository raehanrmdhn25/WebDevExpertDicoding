import UrlParser from '../../routes/url-parser';
import Spinner from '../template/spinner';
import RestaurantSource from '../../data/restaurant-source';
import RestaurantDetail from '../template/restaurant-detail';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import PostReview from '../../utils/post-review';
import { initSwalError } from '../../utils/swal-initiator';

const Detail = {
  async render() {
    return `
            <div class="container">
                <div id="loading"></div>
                <div class="favorite" id="favoriteButtonContainer"></div>
                <div id="main-container">
                    <h2 class="title-container">Restaurant Detail</h2>
                    <section id="detail-restaurant"></section>
                    <div class="form-review">
                        <form autocomplete="on">
                            <div class"mb-3">
                                <label for="input-name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="input-name" minlength="3" placeholder="Insert Name" required>
                            </div>

                            <div class"mb-3">
                                <label for="input-review" class="form-label">Review</label>
                                <input type="text" class="form-control" id="input-review" minlength="3" placeholder="Insert Review" required>
                            </div>

                            <button id="add-review" type="submit" class="button">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#main-container');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-restaurant');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      console.info(data);
      detailContainer.innerHTML += RestaurantDetail(data.restaurant);
      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        data,
      });

      mainContainer.style.display = 'block';
      loading.style.display = 'none';

      const btnAddReview = document.querySelector('#add-review');
      const nameInput = document.querySelector('#input-name');
      const reviewInput = document.querySelector('#input-review');

      btnAddReview.addEventListener('click', async (event) => {
        event.preventDefault();
        await PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      });
    } catch (ex) {
      console.error(ex);
      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      detailContainer.innerHTML = `Error : ${ex.message}`;
      initSwalError(ex.message);
    }
  },
};

export default Detail;
