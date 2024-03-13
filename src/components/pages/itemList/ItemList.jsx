import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div>
      <div className="product-container">
        {items.map(({ id, img, title, price }) => {
          return <ProductCard key={id} id={id} img={img} title={title} price={price} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
