import React from 'react';
import {useSelector} from 'react-redux';

const CartContainer = () => {
  const {amount} = useSelector((store) => store.cart);
  console.log(amount);

  if(amount <= 0) {
    return (
      <section className="cart">
        <header>
          <h2>Shopping Cart</h2>
          <h4 className="empty-cart">There is no item in your cart</h4>
        </header>
      </section>
    )
  }
}

export default CartContainer
