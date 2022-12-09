import React from "react";
import { useParams } from "react-router-dom";

function CheckOut() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "black" }}>
      <h1>Gracias por tu compra</h1>
      <h3>
        Tu Nº de compra es: <strong>{idOrder}</strong>
      </h3>      
    </div>
  );
}

export default CheckOut;
