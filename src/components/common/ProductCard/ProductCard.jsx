import "./ProductCard.css";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={img} alt={title} />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div style={{ paddingBottom: "10px" }}>
          <button className="buy-button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
