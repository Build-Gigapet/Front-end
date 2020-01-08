
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import UpdateForm from "./UpdateForm";

const Dashboard = props => {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        axios
            .get(`/kid/`)
            .then(response => {
                console.log(response.data)
                setKids({ kids: response.data });
            })
            .catch(error => {
                console.error("Server Error", error);
            })
    }, []);


    return (
        <div className="dash-board">

            <h1>Welcome to the GigaPet Dashboard</h1>
            <nav>
                <ul>
                    <li> <a href="#" target="_blank" alt="Click to visit the homepage">Home</a></li>

                    <li><Link to="/login">Log Out</Link></li>
                </ul>
            </nav>


            <div>
                {kids.map(kid => {
                    return (

                        <div key={kid.id} kid={kid}>
                            <h2 className="name">Child Name:<em>{kid.kid_name}</em></h2>

                            <h2 className="age">Child Age:  {kid.age}</h2>
                            <h3 className="pet">Pet Name: {kid.pet_name}</h3>
                            <h3 className="score">Score:<strong>{kid.score}</strong></h3>
                            <h3 className="height">Height:  {kid.height}</h3>
                            <h3 className="fav_food"> Favorite Food:  {kid.fav_food}</h3>
                            <h3 className="weight">Weight: {kid.weight}</h3>



                        </div>
                    )
                })}

            </div>



        </div>



    )
}
export default Dashboard;