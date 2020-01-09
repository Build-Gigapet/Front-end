import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
const initialUser = {

    id: new Date(),
    name: "",
    email: ""
};
const UpdateForm = (props, users) => {

    const [editing, setEditing] = useState(false);
    const [userToEdit, setUserToEdit] = useState(initialUser);

    const editUser = user => {
        setEditing(true);
        setUserToEdit(user);
    }
    useEffect(() => {
        const saveEdit = e => {
            e.preventDefault();
            axiosWithAuth()
                .put(`https://build-gigapet.herokuapp.com/api/auth/${userToEdit.id}`, userToEdit)
                .then(results => {
                    console.log(results)
                    setUserToEdit(props.users.map(user => {
                        if (userToEdit.id === user.id) {
                            return user = results.data
                        } else {
                            return user
                        }

                    }))
                    window.location = ("/");
                })
                .catch(err => console.log(err.response));
        };
    }, [])
    const deleteUser = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/auth/${id}`)
            .then(results => {
                console.log(results.data)
                setUserToEdit(props.users.filter(user => {
                    return user.id !== id;
                }))
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };



    return (
        <div>
            <form>
                <h3>Edit  name and email here</h3>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="email" />
                <button onClick={editUser}>EDIT</button>
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