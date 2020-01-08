<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from '../axiosWithAuth';
=======
import React from "react";
import axiosWithAuth from "../axiosWithAuth";
>>>>>>> Michael-Phelps
import UpdateForm from "./UpdateForm";
import { Link } from "react-router-dom";

const Dashboard = props => {
<<<<<<< HEAD
    const [kids, setKids] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://build-gigapet.herokuapp.com/api/kid')
            .then(response => {
                setKids({ kids: response.data });
            })
            .catch(error => {
                console.error("Server Error", error);
            })
    }, [kids]);


    return (
        <div className="dash-board">


            <nav>
                <ul>
                    <li> <a href="#" target="_blank" alt="Click to visit the homepage">Home</a></li>

                    <li><Link to="/login">Log Out</Link></li>
                </ul>
            </nav>
            <h1>Welcome to the GigaPet Dashboard</h1>

            <div>
                {kids.map(kid => {
                    return (

                        <div key={kid.id} kid={kid}>
                            <div className="name">Child Name:<em>{kid.kid_name}</em></div>

                            <h2 className="age">Child Age:  {kid.age}</h2>
                            <p className="pet">Pet Name: {kid.pet_name}</p>
                            <p className="score">Score:<strong>{kid.score}</strong></p>
                            <p className="height">Height:  {kid.height}</p>
                            <p className="fav_food"> Favorite Food:  {kid.fav_food}</p>
                            <p className="weight">Weight: {kid.weight}</p>



                        </div>
                    )
                })}

            </div>



=======
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
>>>>>>> Michael-Phelps
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
