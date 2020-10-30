import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import {fetchUsers} from '../actions/action'
const UserPost = ({ match}) => {
  const users = useSelector((state) => state.users);
  // console.log("hyyy" + users);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    fetchUsers()
  }, [])
  useEffect(() => {
    const url =
      "https://jsonplaceholder.typicode.com/posts/?id=" + match.params.id;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => setUser(response[0]));
    setIsLoading(false);
  }, [match.params.id]);
  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div>
          <h1>hello, {users}</h1>
          <h2>{user.title}</h2>
          <h2>{user.body}</h2>
          <Link to="/userList">
            <Button variant="primary" style={{ margin: "10px  0 50px 0" }}>
              Back
            </Button>
          </Link>
          <Link to={`/usercomment/${user.id}`}>
            <Button
              variant="primary"
              style={{ margin: "10px  10px 50px 10px" }}
            >
              Comment
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserPost;
