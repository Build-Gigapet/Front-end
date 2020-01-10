import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { CardBody } from "reactstrap";
const initialUser = {

    id: 144,
    name: "newName",
    email: "newName@gmail.com"
};
const UpdateForm = (props, users) => {

    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState(initialUser);

    const editUser = user => {
        setEditing(true);
        setUser(user);
    }
    const handleChange = event => {
        setEditing({ id: event.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://build-gigapet.herokuapp.com/api/auth/:id`, {
                name: 'newName',
                email: 'newName@gmail.com'
            })

            .then(results => {
                // console.log(user)
                setUser(props.users.map(user => {
                    if (user.id === user.name) {
                        return user = results.data
                    } else {
                        return user
                    }

                }))
                window.location = ("/");
                // props.history.push('/')
            })
            .catch(err => console.log(err.response));
    };

    const deleteUser = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/auth/:id`, { user: id })
            .then(deleted => {
                if (deleted) {
                    console.log(deleted)
                } else {
                    console.log('error')
                    // setUser(users.filter(user => {
                    //     return user.id !== id;}))
                }
                window.location = ('/dashboard');
                // props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Edit  name and email here</h3>
                <input type="text" name="name" value={users.name} onChange={(e) => setUser({ [e.target.name]: e.target.value })} placeholder="name" />
                <input type="email" name="email" value={users.email} onChange={(e) => setUser({ [e.target.name]: e.target.value })} placeholder="email" />
                {/* <input type="text" name="id" onChange={handleChange} /> */}
                <button type="submit" onClick={() => setEditing(false)}>EDIT</button>
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