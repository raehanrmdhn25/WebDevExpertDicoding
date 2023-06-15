/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const openIDB = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const FavoriteRestaurantIDB = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await openIDB).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    return (await openIDB).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restoran) {
    if (!restoran.hasOwnProperty('id')) {
      return;
    }
    return (await openIDB).put(OBJECT_STORE_NAME, restoran);
  },

  async deleteRestaurant(id) {
    return (await openIDB).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIDB;
