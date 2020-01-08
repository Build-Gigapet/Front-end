import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
const initialUser = {
    user: "",
    id: ""
};
const UpdateForm = ({ users, updateUsers, props }) => {
    // const [food, setFood] = useState([]);
    const [editing, setEditing] = useState(false);
    const [userToEdit, setUserToEdit] = useState(initialUser);
    console.log(users);

    const saveUser = (e) => {
        e.preventDefault();
        const addUser = this.props.addUser;
        addUser(this.state.user);
    }

    const editUser = user => {
        setEditing(true);
        setUserToEdit(user);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put('https://build-gigapet.herokuapp.com/api/auth/:id', userToEdit)
            .then(res => {
                updateUsers(users.map(user => {
                    if (userToEdit.id === user.id) {
                        return user = res.data
                    } else {
                        return user
                    }

                }))
                props.history.push("/protected");
            })
            .catch(err => console.log(err.response));
    };

    const deleteUser = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/auth/${id}`)
            .then(res => {
                console.log(res.data)
                updateUsers(users.filter(user => {
                    return user.id !== id;
                }))
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };

    if (!users) {
        return <div>Loading user info...</div>
    }

    return (
        <div>
            <p>users</p>
            <ul>
                {users.map(user => (
                    <li key={user.user}><span className="delete" onClick={() => deleteUser(user.id)}>Delete</span></li>
                ))}
            </ul>
            <form>
                <h3>{users.name}</h3>
                <h3>{users.password}</h3>
                <p>Let's edit</p>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="password" placeholder="password" />
                <button className="md-button" onClick={deleteUser}>DELETE</button>

                {/* <label>
                    Pick your Food Category
                <select>
                        <option value="fruit">fruit</option>
                        <option value="vegetable">vegetable</option>
                        <option value="whole grains">whole grains</option>
                        <option value="meat">meat</option>
                        <option value="dairy">dairy</option>
                        <option value="fats_&_oils">fats & oils</option>
                        <option value="treats">treats</option>
                    </select>
                </label>
                <input type="number" name="score" placeholder="score" />
                <input type="text" name="entry" placeholder="food entry" /> */}
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