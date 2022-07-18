import React from "react";
import { useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  console.log(cartItems);

  if (amount <= 0) {
    return (
      <section className="cart">
        <header>
          <h2>Shopping Cart</h2>
          <h4 className="empty-cart">There is no item in your cart</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Shopping Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total: <span>CA${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Delete All</button>
      </footer>
    </section>
  );
};

export default CartContainer;
