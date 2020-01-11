import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import UpdateForm from './UpdateForm';
import FoodsUpdateForm from "./FoodsUpdateForm";

const initialKid = {

    kid_name: "",
    age: "",
    pet_name: "",
    score: "",
    height: "",
    fav_food: "",
    weight: "",

}
const Parent = props => {


    const [kid, setKid] = useState(initialKid);

    const handleChange = e => {
        setKid({

            [e.target.name]: e.target.value
        });
    }


    const addKid = kid => {
        console.log(kid)
        this.setState({ kid: [...kid, kid] })

    }

    const editKid = (e, id) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://build-gigapet.herokuapp.com/api/kid/${id}`, kid)
            .then(results => {
                setKid(kid.map(kid => {
                    if (kid.id !== id) {
                        return kid = kid.results.data
                    } else {
                        return kid
                    }

                }))
                window.location = ("/dashboard");
            })
            .catch(err => console.log(err.response));
    };

    const deleteKid = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/kid/:id`)
            .then(res => {
                console.log(kid.results)
                this.setState(kid.filter(kid => {
                    if (kid.id !== id) {
                        return kid;
                    };
                }))

            })
            .catch(err => console.log(err));
    };


    const handleSubmit = event => {
        event.preventDefault();
        console.log(kid)
        axiosWithAuth()
            .post(`https://build-gigapet.herokuapp.com/api/kid/${kid.id}`, kid)
            .then(result => {
                localStorage.setItem({ kid: result.data });
                window.location('/');
            })
            .catch(error => {
                console.log(error)
            });
    };


    return (
        <div className="parent-form">

            <h3>Enter Kids Here</h3>



            <form onSubmit={handleSubmit}>
                <input type="text" name="kid_name" placeholder="kid_name" value={kid.kid_name} onChange={handleChange} />
                <input type="number" name="age" placeholder="age" value={kid.age} onChange={handleChange} />
                <input type="text" name="pet_name" placeholder="pet name" value={kid.pet_name} onChange={handleChange} />
                <input type="number" name="score" placeholder="Score" value={kid.score} onChange={handleChange} />
                <input type="text" name="height" placeholder="height" value={kid.height} onChange={handleChange} />
                <input type="text" name="fav_food" placeholder="favorite food" value={kid.fav_food} onChange={handleChange} />
                <input type="text" name="weight" placeholder="weight" value={kid.weight} onChange={handleChange} />
                <button type="submit">Add Child </button>
                <button type="submit" onClick={editKid}>Edit Child</button>
                <button type="submit" onClick={deleteKid}>Delete</button>
                <UpdateForm /><br />
                <FoodsUpdateForm />



            </form>


        </div>


    )
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
