import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import cartItems from "../cartItems";
import CartItem from "./CartItem";
import {clearCart} from '../features/cart/CartSlice';

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

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
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>Delete All</button>
      </footer>
    </section>
  );
};

export default CartContainer;
