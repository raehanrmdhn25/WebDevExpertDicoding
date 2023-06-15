import FavoriteRestaurantIDB from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavoriting Restoran', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIDB.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unfavorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unfavorite this restaurant"]')
      .dispatchEvent(new Event('click'));
    const allRestoran = await FavoriteRestaurantIDB.getAllRestaurant();

    expect(allRestoran).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIDB.deleteRestaurant(1);
    document
      .querySelector('[aria-label="unfavorite this restaurant"]')
      .dispatchEvent(new Event('click'));
    const allRestoran = await FavoriteRestaurantIDB.getAllRestaurant();

    expect(allRestoran).toEqual([]);
  });
});
