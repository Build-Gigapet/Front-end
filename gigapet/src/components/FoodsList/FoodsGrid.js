import React, { useEffect, useState } from "react";
import Axios from "axios";
import FoodsCard from "./FoodsCard";
import axiosWithAuth from "../../axiosWithAuth";
import { Container, Row, Col, Card } from "reactstrap";
import "../../pages/styles/global.css";

export default function FoodsList() {
  const [food, setFood] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get("https://build-gigapet.herokuapp.com/api/food")
      .then(response => {
        console.log("response: ", response.data);
        setFood(response.data);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="foods">
      <Container>
        <form className="foodsSearch">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="food"
            placeholder="Search for a Food"
          />
        </form>
        <div>
          {food
            .filter(food =>
              food.food_name.toLowerCase().includes(query.toLowerCase()),
            )
            .map(item => {
              return (
                <div>
                  <Container className="foodsContainer">
                    <Row xs="1">
                      <Card
                        body
                        inverse
                        style={{
                          backgroundColor: "#1F74AC",
                          borderColor: `#1F74AC`,
                        }}
                      >
                        <FoodsCard
                          key={item.id}
                          name={item.food_name}
                          type={item.food_type.toUpperCase()}
                        />
                      </Card>
                    </Row>
                  </Container>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
}
