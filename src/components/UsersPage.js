import React, { useState, useEffect } from "react";
import { getUsers } from "../api/userApi";
import UserList from "./userList";
import { Link } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users._embedded.users));
  }, []);

  return (
    <>
      <h2>Users</h2>
      <Link className="btn btn-primary" style={{ margin: "5px" }} to="/user">
        Add User
      </Link>
      <UserList users={users} />
    </>
  );
}

export default UsersPage;
