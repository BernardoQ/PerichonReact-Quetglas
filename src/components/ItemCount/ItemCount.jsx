import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(120);

  function handleAdd() {
    if (count < stock) setCount(count + 120);
  }

  function handleSubstract() {
    if (count > 120) setCount(count - 120);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <MyButton colorBtn="red" onTouchButton={handleSubstract}>
          -
        </MyButton>
        <span>{count}</span>
        <MyButton colorBtn="green" onTouchButton={handleAdd}>
          +
        </MyButton>
      </div>
      <div className="itemcount_btns">
        <MyButton onTouchButton={() => onAddToCart(count)}>
          Agregar al carrito
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;
