import React from "react";
import Card from "react-bootstrap/Card";

function UserCards({ user}) {
  return (
    <div className="UserCards">
      <Card style={{ width: "25rem", border: "solid 1px blue" }}>
        <Card.Body>
          <Card.Img style={{width:"70px", marginLeft:"10px", float: "right", marginTop:"5px"}} variant="top" src="https://static.thenounproject.com/png/17241-200.png" />
          <Card.Title style={{color: "blue"}}>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">phone: {user.phone}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> email: {user.email}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> website: {user.website}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted"> address: {user.address.street}-{user.address.suite} -{user.address.city}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> company name: {user.company.name}</Card.Subtitle>

          <Card.Text>{user.street}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCards;
