import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { incremetCount, decrementCount, resetCount } from './features/countSlice'
import countSlice from './features/countSlice'
import { useState } from 'react';

function App() {
  var countFromStore = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <>
    <p>Count : {countFromStore.count}</p>
      <div className='buttons'>
        <button onClick={() => {
         alert("Incrementing by 1");
          dispatch(incremetCount());
        }}>Increment</button>
        <button onClick={() => {
          alert("Decrementing by 1");
          dispatch(decrementCount());
        }}>Decrement</button>
         <button onClick={() => {
          alert("Resetting to 0");
          dispatch(resetCount());
        }}>Reset</button>
      </div>
    </>
  );
}

export default App;