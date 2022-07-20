import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";

const App = () => {
  const dispatch = useDispatch();
  // storeで定義したSliceのinitialStateにアクセスするにはuseSeletor()を使用
  const { cartItems } = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);

  // カート情報が変化する度に発火するようにする（いちいち1つずつcalculateTotals()を付けないようにする）
  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
