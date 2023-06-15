import CONFIG from '../../global/config';

const RestaurantCard = (restoran) => `
    <div tabindex="0" class="card">
        <a href="#/restoran/${restoran.id}" class="card-a-tag">
            <div class="img-container">
                <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" alt="${restoran.name}" data-src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" />
                <span tabindex="0" class="card-rating">
                    <i class="fa fa-star" title="ratings"></i>
                    <span>${restoran.rating}</span>
                </span>
            </div>
            
            <div tabindex="0" class="card-content">
                <h2 class="card-content-title">${restoran.name} - ${restoran.city}</h2>
                <p class="detail">${restoran.description}</p>
            </div>
        </a>
    </div>
`;

export default RestaurantCard;
