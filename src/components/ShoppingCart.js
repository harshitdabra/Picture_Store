import React from "react";

const ShoppingCart = ({ items, total, onPay }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={onPay}>Pay</button>
    </div>
  );
};

export default ShoppingCart;
