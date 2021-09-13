import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUESTS,
  FETCH_USER_SUCCESS,
} from "./useerType";

export const fetchUserRequests = () => {
  return {
    type: FETCH_USER_REQUESTS,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

// action-creater

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequests);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};
