import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./cartview.css";
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <h1>Carrito Vacío</h1>
      </div>
    );

  async function handleCheckout(data) {
    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),     
    };    

    createOrder(order)
    const orderId = await createOrder(data);
    navigate(`/checkout/${orderId}`);
    clear();
  }

  return (
    <div className="cart-container">

      <div className="cart-itemsList">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgurl} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
            <h4>unidades: {item.count}</h4>
            <h4>${item.price * item.count}</h4>
            <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
              X
            </MyButton>
          </div>
        ))}
      </div>

      <div className="cartTotal">
        Total ${priceInCart()}
      </div>
      <MyButton onTouchButton={clear} colorBtn="red">
            Vaciar Carrito
      </MyButton>
      <CartForm className="cartForm" onSubmit={handleCheckout} />
    </div>
  );
}

export default CartView;
