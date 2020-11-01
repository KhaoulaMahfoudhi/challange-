import React from "react";
import UserCards from "./UserCards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const Users = useSelector((state) => state.users);

  return (
    <div className="UserList">
      {Users.map((user) => (
        <Link to={`/userpost/${user.id}`}>
          <UserCards key={user.id} user={user} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
