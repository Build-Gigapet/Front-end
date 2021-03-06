import React from "react";
import axiosWithAuth from "../axiosWithAuth";

import UpdateForm from "./UpdateForm";
import { Link } from "react-router-dom";
import FoodsCard from "./FoodsList/FoodsCard";
import FoodsGrid from "./FoodsList/FoodsGrid";
import User from "./User";
import "../pages/styles/global.css";
import KidsList from './KidsList';
import User from "./User"


const Dashboard = props => {
  // const [children, setChildren] = useState([]);
  // useEffect(() => {
  //     axiosWithAuth()
  //         .get("/dashboard")
  //         .then(response => {
  //             setChildren(res.data);
  //         })
  //         .catch(error => {
  //             console.error("Server Error", error);
  //         })
  // }, []);

  return (
    <div className="dash-board">
      <main>
        <div>
          <h2 className="foodsHeader">Food Section</h2>
          <FoodsGrid />

          <h2> Child Section</h2>
          <KidsList />
          <p>User Info</p>
          <User />

          {/* {children && children.map(child => {
                    return (
                        // <img src=""/>
                        <div key={child.id} child={child}>
                            <h2>Food:{child.food}</h2>
                            <div className="name">Child Name:<em>{child.name}</em></div>
                            <p className="score">Score:<strong>{child.score}</strong></p>
                            <UpdateForm child={child} /> */}
          {/* </div>
                    )
                })} */}
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
