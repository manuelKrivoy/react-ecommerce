import ProductCard from "../../common/ProductCard/ProductCard";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greetings }) => {
  return (
    <>
      <div style={{ color: "white" }}>{greetings}</div>
      <div className="product-container">
        <ProductCard
          titulo={"Rosario Central 2009"}
          desc={"Puma"}
          precio={35000}
        />
        <ProductCard
          titulo={"Boca Juniors titular 2023"}
          desc={"Nike"}
          precio={37000}
        />
        <ProductCard titulo={"Argentina 1986"} desc={"Le Coq"} precio={30000} />
      </div>
    </>
  );
};
