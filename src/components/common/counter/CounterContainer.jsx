import Count from "./Count";

export const CountContainer = ({ stock, onAdd, totalQuantity }) => {
  return <Count stock={stock} onAdd={onAdd} totalQuantity={totalQuantity} />;
};
