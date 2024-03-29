import React from 'react';
import "../css/Button.css"

function Button({ text, isClickButton, handleClick }) {
  return (
    <button className={isClickButton ? "click-button" : "restart-button"}
      onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button;