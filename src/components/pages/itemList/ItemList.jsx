import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="product-container">
      {items.map(({ id, img, title, description, price }) => {
        return <ProductCard key={id} img={img} title={title} description={description} price={price} />;
      })}
    </div>
  );
};

export default ItemList;
