import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import IconSVG from "./IconSVG";
import { Link } from "react-router-dom";

function CartWidget() {
  const miContext = useContext(cartContext);

  return (
    <div>
      <Link to="/cart">
        <IconSVG />
      </Link>
      <span>${miContext.priceInCart()}</span>
    </div>
  );
}

export default CartWidget;