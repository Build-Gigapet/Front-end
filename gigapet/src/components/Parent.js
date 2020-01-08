import React, { useState } from 'react';
import axios from "axios";
import UpdateForm from "./UpdateForm";
import axiosWithAuth from '../axiosWithAuth';



class Parent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            kid: {
                id: new Date(),
                kid_name: "",
                age: "",
                pet_name: "",
                score: "",
                height: "",
                fav_food: " ",
                weight: "",
            }
        };
    }


    handleChange = e => {
        this.setState({

            [e.target.name]: e.target.value
        });
    }


    addKid = (kid) => {
        console.log(kid)
        this.setState({ kid: [...this.state.kid, kid] })

    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axiosWithAuth()
            .post(`https://build-gigapet.herokuapp.com/api/kid/1`, this.state)
            .then(response => {
                console.log(response);
                this.setState(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="parent-form">

                <UpdateForm props={this.state.kid} />

                <form onSubmit={this.handleSubmit} method="get">
                    <input type="text" name="kid_name" placeholder="kid_name" value={this.state.kid.kid_name} onChange={this.handleChange} />
                    <input type="number" name="age" placeholder="age" value={this.state.kid.age} onChange={this.handleChange} />
                    <input type="text" name="pet_name" placeholder="pet name" value={this.state.kid.pet_name} onChange={this.handleChange} />
                    <input type="number " name="score" placeholder="Score" value={this.state.kid.score} onChange={this.handleChange} />
                    <input type="number" name="height" placeholder="height" value={this.state.kid.height} onChange={this.handleChange} />
                    <input type="text" name="fav_food" placeholder="favfood" value={this.state.kid.fav_food} onChange={this.handleChange} />
                    <input type="text" name="weight" placeholder="weight" value={this.state.kid.weight} onChange={this.handleChange} />
                    <button type="submit" formMethod="post">Add Child </button>

                </form>


            </div>


        )
    }
}
export default Parent;


// {kid.map(kid => {
//     return (
//         <div className="kid-list" key={kid.id}>
//             <p>{kid.kid_name}</p>
//             <p>{kid.age}</p>
//             <p>{kid.pet_name}</p>
//             <p>{kid.score}</p>
//             <p>{kid.height}</p>
//             <p>{kid.fav_food}</p>
//             <p>{kid.weight}</p>
//         </div>

//     )

// })}

// </div>
// <>
