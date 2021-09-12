import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Cake Container {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// we can do this stuff using hooks too refer to hookCakeContainer to know how we can do this using hooks

//to use data from reducer
function mapStateToProps(state) {
  return {
    numOfCakes: state.numOfCakes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
