import FavoriteRestaurantIDB from '../data/restaurant-idb';
import { createFavoriteButtonTemplate, createUnfavoriteButtonTemplate } from '../view/template/favorite-button';
import { initSwalError, initSwalSuccess } from './swal-initiator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, data }) {
    this.favoriteButtonContainer_ = favoriteButtonContainer;
    this.restaurant_ = data.restaurant;

    await this.renderButton_();
  },

  async renderButton_() {
    try {
      const { id } = this.restaurant_;
      const restaurant = await FavoriteRestaurantIDB.getRestaurant(id);

      if (restaurant) {
        this.renderUnfavoriteButtonTemplate_();
      } else {
        this.renderFavoriteButtonTemplate_();
      }
    } catch (ex) {
      console.error(ex);
      initSwalError(ex.message);
      throw new Error(ex);
    }
  },

  renderFavoriteButtonTemplate_() {
    this.favoriteButtonContainer_.innerHTML = createFavoriteButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');

    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.putRestaurant(this.restaurant_);
      initSwalSuccess('Favorite Restaurant');
      this.renderButton_();
    });
  },

  renderUnfavoriteButtonTemplate_() {
    this.favoriteButtonContainer_.innerHTML = createUnfavoriteButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');

    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.deleteRestaurant(this.restaurant_.id);
      initSwalError('Unfavorite Restaurant');
      this.renderButton_();
    });
  },
};

export default FavoriteButtonInitiator;
