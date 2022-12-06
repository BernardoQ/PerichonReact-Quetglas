import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import ThankYou from "./components/CheckOut/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route path="/category/:idCategory" element={<ItemListContainer />} />

              <Route path="/detail/:idItem" element={<ItemDetailContainer />} />

              <Route path="/cart" element={<CartView />} />

              <Route path="/checkout/:idOrder" element={<CheckOut />} />

              <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
