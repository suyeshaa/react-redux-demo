import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.err ? (
    <h2>err</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((el) => <p key={el.id}>{el.name}</p>)}
      </div>
    </div>
  );
}

export default UserContainer;
