import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CommentsList = ({ match }) => {
  const comment = useSelector((state) =>
    state.comments.find((comment) => comment.postId === +match.params.id)
  );
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === +match.params.id)
  );
  const user = useSelector((state) =>
    state.users.find((user) => post.userId === user.id)
  );
  return (
    
      <Card
        style={{  width:"300px" ,margin: "20px 150px 10px 550px", backgroundColor: "rgb(3, 160, 165)",color: "white" }}
      >
        <Card.Header>{post.title}</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>{post.body}</Card.Text>
          <Card.Text>{comment.body}</Card.Text>
          <Link to={`/userpost/${user.id}`}>
            <Button style ={{backgroundColor:" rgb(2, 48, 72) "}}>Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
  );
};

export default CommentsList;
