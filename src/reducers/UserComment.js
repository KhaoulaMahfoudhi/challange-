import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
const UserComment = ({match}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user , setUser] = useState([]);
     // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect(() => {
        setIsLoading(true);
         const url =  "https://jsonplaceholder.typicode.com/comments/?id="+match.params.id
         fetch(url)
             .then(response => response.json())
             .then(response => setUser(response[0]))
             setIsLoading(false);
    }, [match.params.id]);
    return (
        <div>
             {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
          <div>
  
    <h2>{user.name}</h2>
    <h2>{user.email}</h2>
    <h2>{user.body}</h2>
    <Link to={`/userpost/${user.id}`}>
    <Button variant="primary" style={{margin:"10px  0 50px 0"}}>Back</Button>
    </Link>
          </div>
            )}
        </div>
    )
}

export default UserComment

