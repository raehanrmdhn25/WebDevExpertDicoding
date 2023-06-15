const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnfavoriteButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createFavoriteButtonTemplate, createUnfavoriteButtonTemplate };
