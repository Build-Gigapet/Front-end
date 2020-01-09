import React, { useEffect, useState } from "react";
import Axios from "axios";
import FoodsCard from "./FoodsCard";
import axiosWithAuth from "../../axiosWithAuth";

const token = localStorage.getItem("token");
const FoodList = props => {
  // set the state for the data
  const [data, setData] = useState([]);
  // set the state for the Search Query
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getFoods = () => {
      axiosWithAuth()
        .get("https://build-gigapet.herokuapp.com/api/food")
        .then(response => {
          console.log("Response: ", response);

          // we're going to set a variable that contains an array of characters, using the search term as a filter
          const result = response.data.results.filter(food =>
            food._food_name.toLowerCase().includes(query.toLowerCase()),
          );
          // console.log("data: ", characters);

          // Now we populate our state with the data that's returned from the filter above
          setData(result);
          // console.log("character: ", data);
        })
        .catch(error => {
          console.log(`Error :`, error.response);
        });
    };
    getFoods();
  }, [data]);

  // change our query state based on form input
  const handleInputChange = event => {
    setQuery(event.target.value);
    // console.log("SearchForm: ", query);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          tabIndex="0"
          className="prompt searchName"
          placeholder="Search By Name"
          autoComplete="off"
        />
      </form>
      {/* {console.log("Data being passed to map: ", data)} */}

      {/* Now we're going to create a card for each item in the api, based on the filters we used */}
      <div className="grid-view">
        {data.map(item => (
          <FoodsCard key={item.id} food={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
