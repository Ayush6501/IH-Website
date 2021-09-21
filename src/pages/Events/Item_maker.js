import React from "react";
import {Card, Button} from "react-bootstrap";

export default function Item_maker(props) {
  return (
    <div>
      <Card style={{ width: "25rem",margin:"2rem" }}>
        <Card.Img variant="top" src="http://futureuniversity.com/wp-content/uploads/sites/9/2015/02/default-placeholder-1024x1024-570x321.png" />
        <Card.Body>
          <Card.Title>{props.arg.Title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
