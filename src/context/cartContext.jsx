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
      /* let newCart = cart.map( item => item); */

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
    /*falta calcular el costo total de la compra */
    let totalCost = 0;
    return totalCost;
  }

  function removeItem(idRemove) {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);

    /* cart.filter -> Filtrar todos los items con un ID diferente a "idRemove"   */
  }

  function clear() {
     // toast.error("Carrito vaciado", { position: "bottom-left" });
    
    /* vaciar el estado */
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
