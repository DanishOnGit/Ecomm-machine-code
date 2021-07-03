export const ProductCard = ({product:{brand,size,price}}) => {
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
          <p>Pure Cotton polo tshirt</p>
          <p>
            <span className="strong">Rs{price} </span>
            <span>{size}</span>
           
          </p>
        </div>
      </div>
    </div>
  );
};
