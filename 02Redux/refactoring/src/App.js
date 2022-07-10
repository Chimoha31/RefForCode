import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, login } from './actions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  const dispatch = useDispatch();

  console.log(counter);
  console.log(isLogin)
  return (
    <div className="App">
      <h1>Redux</h1>
      <h3>Count: {counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>Scceed to login</h3> : <h3>Please Login</h3>}
      <button onClick={() => dispatch(login())}>Login or Logout</button>
    </div>
  )
}

export default App
