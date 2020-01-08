
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from '../axiosWithAuth';
import UpdateForm from "./UpdateForm";

const Dashboard = props => {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/kid')
            .then(response => {
                setKids({ kids: response.data });
            })
            .catch(error => {
                console.error("Server Error", error);
            })
    }, []);


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

                            <p className="age">Child Age:  {kid.age}</p>
                            <p className="pet">Pet Name: {kid.pet_name}</p>
                            <p className="score">Score:<strong>{kid.score}</strong></p>
                            <p className="height">Height:  {kid.height}</p>
                            <p className="fav_food"> Favorite Food:  {kid.fav_food}</p>
                            <p className="weight">Weight: {kid.weight}</p>



                        </div>
                    )
                })}

            </div>



        </div>



    )
}
export default Dashboard;