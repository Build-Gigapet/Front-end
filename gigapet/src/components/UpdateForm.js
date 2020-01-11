import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { CardBody } from "reactstrap";

const UpdateForm = (props, users, id) => {

    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const editUser = user => {
        setEditing(true);
        setUser(user);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://build-gigapet.herokuapp.com/api/auth/1`, {
                name: "newName",
                email: "newName@gmail.com"

            })

            .then(results => {
                console.log(user)
                props.updateUsers(users.map(user => {
                    if (user.name === user.id) {
                        return user = results

                    }

                }))
                window.location = ("/dashboard");
                // props.history.push('/')
                setUser(user.name)
            })
            .catch(err => console.log(err.response));
    };
    const handleChange = event => {
        setEditing({ id: event.target.value });
    }
    const deleteUser = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/auth/8`)
            .then(deleted => {
                // this.setState(users.filter(user => {
                if (deleted == id) {
                    return user;
                };
                // }))
                window.location = ('/dashboard');
                // props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form onSubmit={saveEdit}>
                <h3>Edit  name and email here</h3>
                <input type="text" name="name" value={users.name} onChange={handleChange} placeholder="name" />
                <input type="email" name="email" value={users.email} onChange={handleChange} placeholder="email" />
                {/* <input type="text" name="id" onChange={handleChange} /> */}
                <button type="submit" onClick={() => setEditing(true)}>EDIT</button>
                <button className="md-button" onClick={deleteUser}>DELETE</button>

                <input type="submit" value="submit" />
            </form>
        </div>

    )
}
export default UpdateForm;
// const initialMeal ={
//     meal:"",
//     score:"",
//     child:""
 //date:"", food category of fruit, vegetable, whole grains, meat, dairy, fats and oils, and treats 
// };

// const UpdateForm = ()=>{
//     const [editing, setEditing]= useState(false);
//     const [mealToEdit, setMealToEdit] = useState(initialMeal);
//     const editMeal = meal =>{
//         setEditing(true);
//         setMealToEdit(meal);
//     };
//     const saveEdit = e =>{
//         e.preventDefault();
//         axiosWithAuth()
//         .put(`/${mealToEdit.id}`,mealToEdit)
//         .then(res =>{
//             updateMeals(meals.map(meal =>{
//                 if(mealToEdit.id === meal.id){
//                 return meal = res.data
//             }else{
//                 return meal
//             }
//             }))
//             props.history.push("protected");
//         })
//         .catch(err => console.log(err.response));
//     };
//     const deleteMeal = id =>{
//         axiosWithAuth().delete(`/${id}`)
//         .then(res =>{
//             updateMeals(meals.filter(meal =>{
//                 return meal.id !== id;
//             }))
//             props.history.push('/protected');
//         })
// }
// if(!meals){
//     return <div>Loading meals info ...</div>
// }
// return (
//     <div className="meals">
//         <p>meals</p>
//         <ul>
//             {meals.map(map =>(
//                 <li key={meal.meal} onClick={()=>editMeal(meal)}><span><span className="delete" onClick={()=>deleteMeal(meal.id)}>X</span>{""}
//                 {meal.meal}</span><div className="meal-box"/></li>
//             ))}
//         </ul>
//         {editing && (
//             <form onSubmit={saveEdit}>
//                 <legend>edit meal</legend>
//                 <label>meal name:
//                     <input type="text" onChange={e =>setMealToEdit({...mealToEdit, meal: e.target.value})}
//                     value={mealToEdit.meal} />
//                 </label>
//                 <input  type="number" onChange={e =>setMealToEdit({...mealToEdit, score: e.target.value})}
//                 value={mealToEdit.score} />
//                 <input  type="text" onChange={e =>setMealToEdit({...mealToEdit, child: e.target.value})}
//                 value={mealToEdit.child} />
//                 <button onClick={()=>setEditing(false)}>cancel</button>

//             </form>
//         )}
//     </div>
// )
//         }
//         export default UpdateForm;