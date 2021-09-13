import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUESTS,
  FETCH_USER_SUCCESS,
} from "./useerType";

const initialState = {
  loading: false,
  users: [],
  err: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        err: "",
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        err: action.payload,
        users: [],
      };
    default:
      return state;
  }
};
