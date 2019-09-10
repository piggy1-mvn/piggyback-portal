import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 &&
          props.users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <Link to={"/user/" + user.id}>{user.user_email}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserList;
