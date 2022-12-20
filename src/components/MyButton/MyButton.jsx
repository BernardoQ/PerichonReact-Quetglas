import "./mybutton.css";
import React from "react";

function MyButton(props) {
 
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

