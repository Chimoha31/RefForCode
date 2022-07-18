import {createSlice} from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 3,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}
})

// const {} = cartSlice.actions;
export default cartSlice.reducer