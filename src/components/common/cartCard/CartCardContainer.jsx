import CartCard from "./CartCard";

export const CartCardContainer = ({ id, img, title, price, quantity, removeById }) => {
  return <CartCard img={img} id={id} title={title} price={price} quantity={quantity} removeById={removeById} />;
};
