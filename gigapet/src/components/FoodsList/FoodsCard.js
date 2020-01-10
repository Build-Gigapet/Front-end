import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import FoodsGrid from "./FoodsGrid";

export default function FoodsCard(props) {
  return (
    <div>
      <CardTitle>Name: {props.name}</CardTitle>
      <CardText>Category: {props.type}</CardText>
    </div>
  );
}
