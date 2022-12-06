import { useState, useEffect } from "react";
import "./itemlist.css";
import getItems, { getItemsByCategory } from "../../Services/firestore";
import { useParams } from "react-router-dom";
import Item from "./Item";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if (!idCategory) {
      let respuesta = await getItems();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory);
      setProducts(respuesta);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="#E33532"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
