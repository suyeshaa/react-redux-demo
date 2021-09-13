import { BUY_CAKE } from "./cakeType";

//action-generator

export const buyCake = (numb = 1) => {
  return {
    type: BUY_CAKE,
    payload: numb,
  };
};
