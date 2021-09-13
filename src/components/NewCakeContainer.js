import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  const [numb, setNumb] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cake {numOfCakes} </h2>
      <input type="text" onChange={(e) => setNumb(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numb))}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
