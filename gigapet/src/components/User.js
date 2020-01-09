import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import UserForm from "./UpdateForm";

const User = () => {
    const [users, setUsers] = useState([]);
    const addUser = user => {
        setUsers([...users, user]);
    };
    useEffect(() => {
        axiosWithAuth().get('https://build-gigapet.herokuapp.com/api/auth/users')
            .then(results => {
                console.log(results.data)
                setUsers(results.data)
            })
            .catch(err => console.log(err));
    }, [])
    const updateUsers = user => {
        console.log(user);
        setUsers({ users: [users, user] });
    };
    console.log(users);
    if (users.length > 0) {


        return (
            <div>

                <p>users</p>
                <div>

                    {users.map(user => {
                        return (
                            <div><h3>{user.name}</h3>
                                <h3>{user.email}</h3></div>
                        )
                    })}

                </div>
            </div>
        )
    } else {
        return <h1>Loading users...</h1>
    }
}
export default User;



        // import React from 'react';
// import {Link} from "react-router-dom";
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
