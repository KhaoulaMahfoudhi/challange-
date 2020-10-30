import React, { useState, useEffect } from "react";
import UserCards from "../components/UserCards";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const UserList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({ hits: [] });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setIsLoading(true);
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setData(result.data);
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div>
          <div style={{ backgroundColor: "blue" }}>
            <h1 style={{ textAlign: "center", color: "white" }}> Users </h1>
          </div>

          <div className="UserList">
            {data.length > 0 &&
              data.map((user) => (
                <Link to={`/userpost/${user.id}`}>
                  <UserCards key={user.id} {...user} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
