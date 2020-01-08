import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const User = () => {
    const [users, setUsers] = useState([]);
    const addUser = user => {
        setUsers([...users, user]);
    };
    const getUser = () => {
        axiosWithAuth().get('https://build-gigapet.herokuapp.com/api/auth/:id')
            .then(res => {
                console.log(res.data)
                setUsers({ users: res.data })
            })
            .catch(err => console.log(err));
    }

    console.log(users);

    return (
        <div>

            <p>users</p>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="name">{user.name}</li>
                    ))}
                    <li>{users.email}</li>


                </ul>
            </div>
            <div>
                <h3>{users.name}</h3>
                <h3>{users.email}</h3>

            </div>
        </div>
    )
}
export default User;



// import React from 'react';
// import { Link } from "react-router-dom";
// const initialUser = {

//     id: new Date(),
//     name: "",
//     email: ""
// };
// const Dashboard = props => {
//     const [users, setUsers] = useState(initialUser);



//     axiosWithAuth().get('https://build-gigapet.herokuapp.com/api/auth/:id')
//         .then(res => {
//             console.log(res.data)
//             setUsers({ users: res.data })
//         })
//         .catch(err => console.log(err))


//     const addUser = initalUser => {
//         setUsers([...users, initialUser]);
//     };


//     return (
//         <div className="dash-board">

//             <h1>Welcome to the GigaPet Dashboard</h1>
//             <nav>
//                 <ul>
//                     <li> <a href="#" target="_blank" alt="Click to visit the homepage">Home</a></li>

//                     <li><Link to="/login">Log Out</Link></li>
//                 </ul>
//             </nav>
//             <main>


//                 <div>
//                     <p>users</p>
//                     <ul>
//                         {users.map(user => (
//                             <li key={user.user}><span className="delete" onClick={() => deleteUser(user.id)}>Delete</span></li>
//                         ))}
//                     </ul>

//                     <form>
//                         <h3>{users.name}</h3>
//                         <h3>{users.email}</h3>
//                         <p>Let's edit</p>
//                         <input type="text" name="name" placeholder="name" />
//                         <input type="email" name="email" placeholder="email" />
//                         <button onClick={editUser}>EDIT</button>
//                         <button className="md-button" onClick={deleteUser}>DELETE</button>

//                     </form>
//                     </div>
//                 </main>

//                 }




//         </div>








//             )
//         }
// export default Dashboard;
