import React from "react";
import axiosWithAuth from "../axiosWithAuth";
import UpdateForm from "./UpdateForm";
import { Link } from "react-router-dom";

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
      <header>
        <nav>
          <a href="" target="_blank" alt="Click to visit the homepage">
            Home
          </a>

          <Link to="/login">Log Out</Link>
        </nav>
      </header>
      <main>
        <div>
          <h2>Food</h2>
          <p> Child Name</p>
          <p>Score</p>

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
