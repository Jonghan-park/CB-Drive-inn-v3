import React from "react";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  return (
    <div>
      <img src={props.item.img} alt={props.item.title} />
      <h2>{props.item.title}</h2>
      <div>
        <button disabled={props.item.amount === 1} onClick={props.onRemove}>
          -
        </button>
        <h2>{props.item.amount}</h2>
        <button onClick={props.onAdd}>+</button>
      </div>

      <h2>{price}</h2>
      <button onClick={() => removeItemHandler(propsitem)} variant="light">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
