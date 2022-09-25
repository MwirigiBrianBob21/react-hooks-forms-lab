import React, { useState } from "react";

function Item({ name, category }) {
  // const [name, setName] = useState(name)
  const [isInCart, setIsInCart] = useState(false);

 

  // const filteredNames = name.map(filteredName => filteredName.name.includes(search)))


  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
