import "./styles.css";

const Product = (props) => {
  const { image, category, title, price, stock } = props;
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-category">
        <span>{category}</span>
      </div>
      <div className="product-title">
        <h2>{title}</h2>
      </div>
      <div className="product-info">
        <div className="product-price">
          <span>{price}</span>
        </div>
        <div className="product-stock">
          <span>{stock}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
