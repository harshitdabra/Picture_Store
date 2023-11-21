import React, { useState } from "react";
import PictureList from "./components/PictureList";
import ShoppingCart from "./components/ShoppingCart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleBuy = (picture) => {
    setCart([...cart, picture]);
    setTotal(total + picture.price);
  };

  const handlePay = () => {
    // Implement payment logic here
    alert("Payment successful!");
    setCart([]);
    setTotal(0);
  };

  return (
    <div>
      <header>
        <h1>Art Gallery</h1>
      </header>
      <div className="container">
        <PictureList onBuy={handleBuy} />
        <ShoppingCart items={cart} total={total} onPay={handlePay} />
      </div>
    </div>
  );
}

export default App;
