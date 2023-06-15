import RestaurantSource from '../data/restaurant-source';

const PostReview = async (url, name, review) => {
  const input = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
        <div class="detail-review-item">
            <div class="review-header">
                <p class="review-name">${name}</p>
                <p class="review-date">${date}</p>
            </div>

            <div class="review-body">
                ${review}
            </div>
        </div>
    `;

  const reviewResponse = await RestaurantSource.postRestaurantReview(input);
  console.log(reviewResponse);

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
