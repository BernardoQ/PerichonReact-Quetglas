import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

function ItemCountCart({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <MyButton colorBtn="red" onTouchButton={handleSubstract}>
          -
        </MyButton>
        <span>{count}</span>
        <MyButton colorBtn="green" onTouchButton={handleAdd && onAddToCart(count)} >
          +
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCountCart;
