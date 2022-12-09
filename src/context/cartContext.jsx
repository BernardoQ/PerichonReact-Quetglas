import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {

      product.count = count;
      newCart.push(product);

      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart() {
    let totalPrice = 0;
    cart.forEach(
      (product) =>(totalPrice = totalPrice + product.price * product.cantidad)
    )
    return totalPrice;
  }

  function removeItem(idRemove) {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  function clear() {
    setCart([]);
    // toast.error("Carrito vaciado", { position: "bottom-left" });
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        clear,
        addToCart,
        itemsInCart,
        removeItem,
        priceInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
