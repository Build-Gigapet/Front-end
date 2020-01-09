import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export default function FoodCard(props) {
  // console.log("Props On CharacterCard ", props);

  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{props.food_name}</CardTitle>
          <CardText>{props.food_type}</CardText>
        </Card>
      </Col>
    </Row>
  );
}
