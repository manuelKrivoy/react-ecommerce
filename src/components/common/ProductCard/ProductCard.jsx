import "./ProductCard.css";

const ProductCard = ({ titulo, marca, precio }) => {
  return (
    <div className="card">
      <h4 className="product-title">{titulo}</h4>
      <h3 className="brand">{marca}</h3>
      <h3 className="price">${precio}</h3>
    </div>
  );
};

export default ProductCard;
