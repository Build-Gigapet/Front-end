import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
const updateForm = () => {
    return (
        <div>
            <form>
                <label>
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
                <input type="text" name="entry" placeholder="food entry" />
                <input type="submit" value="submit" />
            </form>
        </div>

    )
}
export default updateForm;
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