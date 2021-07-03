export const ProductCard = ({ product: { type, brand, size, price } }) => {
 
  const sizesArr = size.map((size) =><span key={size}> {size} </span>);

  return (
    <div>
      <div className="image-card-wrapper outlined product-card-styled">
        <div className="card-image greater-height">
          <img
            className="product-image"
            src="https://i.postimg.cc/g0CzBrxf/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpg"
            alt="product"
          />
          <span className="badge-success">New</span>
        </div>
        <div className="product-details-wrapper">
          <p className="strong">{brand}</p>
          <p>{type}</p>
          <p>
            <span className="strong">Rs{price} </span>

            {sizesArr}
          </p>
        </div>
      </div>
    </div>
  );
};
