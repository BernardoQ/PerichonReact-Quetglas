import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/category/:idCategory" element={<ItemListContainer />} />

            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />

            <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
