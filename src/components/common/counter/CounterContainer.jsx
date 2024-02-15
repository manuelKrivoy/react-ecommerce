import { useState } from "react";
import Count from "./Count";

const CountContainer = ({ stock }) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < stock ? setCount(count + 1) : alert("se ha alcanzado el stock"));
  };

  const odd = () => {
    if (count > 1 ? setCount(count - 1) : alert("no se puede seguir restando"));
  };

  return <Count count={count} add={add} odd={odd} />;
};

export default CountContainer;
