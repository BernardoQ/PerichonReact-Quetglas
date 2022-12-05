import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <ul className="card-detail_list"> 
          <li><b>Medidas: </b>{product.measures}</li>
          <li><b>Color: </b>{product.color}</li>
          <li><b>Presentacion: </b>{product.presentation}</li>
          <li><b>Caracteristicas: </b></li>
          <ol className="features-list">            
            <li>{product.features1}</li>
            <li>{product.features2}</li>
            <li>{product.features3}</li>
          </ol>
        </ul>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      
      <div> 
        <ItemCount/>
      </div>
    </div>
  );
}

export default ItemDetail;
