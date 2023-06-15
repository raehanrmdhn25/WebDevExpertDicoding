import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIDB from "../../src/scripts/data/restaurant-idb";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurantIDB: FavoriteRestaurantIDB,
      data: {
        restaurant,
      },
    });
  };
   
  export { createFavoriteButtonPresenterWithRestaurant };