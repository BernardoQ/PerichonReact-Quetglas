import "./mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  return (
    <button
      onClick={props.onTouchButton}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;

