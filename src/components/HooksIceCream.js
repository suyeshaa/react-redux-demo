import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

function HooksIceCream() {
  // we are doing state.iceCream.numOfIceCream because our state afetr getting out of root reducer is a composiition of 2 states the cake state as well as the ice cream state so to specefy which state we are using we say that we want num of icecreams form icecream state
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice-creams {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default HooksIceCream;
