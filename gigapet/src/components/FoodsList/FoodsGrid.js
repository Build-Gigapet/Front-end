import React, { useEffect, useState } from "react";
import Axios from "axios";
import FoodsCard from "./FoodsCard";
import axiosWithAuth from "../../axiosWithAuth";

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
      <form className="foodsSearch">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="food"
          placeholder="Search"
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
                <FoodsCard
                  key={item.id}
                  name={item.food_name}
                  type={item.food_type}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
