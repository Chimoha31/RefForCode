import React from "react";
import { PlusIcon, MinusIcon } from "../HeroIcons";
import { useDispatch } from "react-redux";
import { removeItem, increment, decrement } from "../features/cart/CartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">CA${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          Delete
        </button>
        {/* //payload = data */}
      </div>

      <div>
        <button className="amount-btn" onClick={() => dispatch(increment(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrement(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
