import React, { useState, useEffect } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import FoodsGrid from "./FoodsGrid";

export default function FoodsCard(props) {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.type}</CardText>
        </Card>
      </Col>
    </Row>
  );
}
