import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './couterSlice';

CouterFeatures.propTypes = {};

function CouterFeatures(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  function handleIncrease() {
    const action = increase();
    dispatch(action);
  }
  function handleDecrease() {
    const action = decrease();
    dispatch(action);
  }
  return (
    <div>
      Couter Features {counter}
      <br />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CouterFeatures;
