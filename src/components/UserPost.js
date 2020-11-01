import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const PostList = ({ match }) => {
  const post = useSelector((state) =>
    state.posts.find((post) => post.userId === +match.params.id)
  );
  const user = useSelector((state) =>
    state.users.find((user) => user.id === +match.params.id)
  );

  return (
    
      <Card
        style={{ width:"300px" ,margin: "20px 150px 10px 550px", backgroundColor: "rgb(3, 160, 165)",color: "white" }}
      >
        <Card.Header>{user.username}</Card.Header>
        <Card.Body>
          <Card.Text>{user.name}</Card.Text>
          <Card.Text>{post.title}</Card.Text>
         <Card.Text>{post.body}</Card.Text>
         <Link to={`/usercomment/${user.id}`}>
        <Button style={{marginRight:"10px", backgroundColor:" rgb(2, 48, 72) "}}>Comment</Button>
        </Link>
        <Link to="/userList">
        <Button style ={{backgroundColor:" rgb(2, 48, 72) "}}> Go Back</Button>
        </Link>
        </Card.Body>
      </Card>
  );
};

export default PostList;
