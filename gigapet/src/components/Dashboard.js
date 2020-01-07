
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from '../axiosWithAuth';
import UpdateForm from "./UpdateForm";

const Dashboard = props => {
    const [children, setChildren] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("https://build-gigapet.herokuapp.com/api/kid")
            .then(response => {
                setChildren({ children: response.data });
            })
            .catch(error => {
                console.error("Server Error", error);
            })
    }, []);
    const addKid = (kid) => {
        console(kid)
        setChildren({ children: [...children, kid] })
    }
    return (
        <div className="dash-board">
            <UpdateForm children={children} addKid={addKid} />
            <header>
                <nav>
                    <ul>
                        <li> <a href="#" target="_blank" alt="Click to visit the homepage">Home</a></li>

                        <li><Link to="/login">Log Out</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div>
                    {children && children.map(child => {
                        return (

                            <div key={child.id} child={child}>
                                <div className="name">Child Name:<em>{child.kid_name}</em></div>

                                <p className="age">Child Age:  {child.age}</p>
                                <p className="pet">Pet Name: {child.pet_name}</p>
                                <p className="score">Score:<strong>{child.score}</strong></p>
                                <p className="height">Height:  {child.height}</p>
                                <p className="fav_food"> Favorite Food:  {child.fav_food}</p>
                                <p className="weight">Weight: {child.weight}</p>



                            </div>
                        )
                    })}

                </div>
            </main>


        </div>



    )
}
export default Dashboard;