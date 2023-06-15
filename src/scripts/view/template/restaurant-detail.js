import CONFIG from '../../global/config';

const RestaurantDetail = (restoran) => `
    <div class="detail">
        <div class="img-container">
            <img class="detail-img" alt="${restoran.name}" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" crossorigin="anonymous"/>
        </div>

        <ul class="detail-info">
            <li>
                <i class="fas fa-store-alt icon-primary" title="restaurant"></i>
                <p class="detail-name-address-rating">${restoran.name}</p>
            </li>

            <li>
                <i class="fas fa-map-marker-alt icon-primary" title="address"></i>
                <p class="detail-name-address-rating">${restoran.address}, ${restoran.city}</p>
            </li>

            <li>
                <i class="fas fa-star icon-primary" title="ratings"></i>
                <p class="detail-name-address-rating">${restoran.rating}</p>
            </li>

            <li>
                <p class="detail-description">${restoran.description}</p>
            </li>

            <li>
                ${restoran.categories.map(
    (category) => `
                        <span class="category">${category.name}</span>
                    `,
  ).join('')}
            </li>
        </ul>

        <h3>Menu Restaurant</h3>
        <div class="detail-menu">
            <div class="detail-food">
                <h4>Food</h4>
                <ul>
                    ${restoran.menus.foods.map(
    (food, i) => `
                            <li><p>${i + 1}) ${food.name}</p></li>
                        `,
  ).join('')}
                </ul>
            </div>

            <div class="detail-drink">
                <h4>Drink</h4>
                <ul>
                    ${restoran.menus.drinks.map(
    (drink, i) => `
                            <li><p>${i + 1}) ${drink.name}</p></li>
                        `,
  ).join('')}
                </ul>
            </div>
        </div>

        <h3 class="title-review">Reviews</h3>
        <div class="detail-review">
            ${restoran.customerReviews.map(
    (review) => `
                    <div class="detail-review-item">
                        <div class="review-header">
                            <p class="review-name">${review.name}</p>
                            <p class="review-date">${review.date}</p>
                        </div>

                        <div class="review-body">
                            ${review.review}
                        </div>
                    </div>
                `,
  ).join('')}
        </div>
    </div>
`;

export default RestaurantDetail;
