export const ProductCard = () => {
  return (
    <div>
      <div class="image-card-wrapper outlined" style="width: 15rem">
        <div class="card-image greater-height">
          <img
            src="images\mateo-avila-chinchilla-x_8oJhYU31k-unsplash.jpg"
            alt="..."
          />
          <span class="badge-success">New</span>
        </div>
        <div class="product-details-wrapper">
          <p class="strong">Ether</p>
          <p>Pure Cotton polo tshirt</p>
          <p>
            <span class="strong">Rs395 </span>
            <span class="line-through">Rs799 </span>
            <span style="color: #fc452e">(50% OFF)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
