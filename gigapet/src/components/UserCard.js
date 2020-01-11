import React, { useState } from 'react';
import axiosWithAuth from "../axiosWithAuth";
const initialUser = {

    id: new Date(),
    name: "",
    email: ""
};
const UserCard = (props, users, updateUsers) => {

    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState(initialUser);

    const editUser = user => {
        setEditing(true);
        setUser(user);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://build-gigapet.herokuapp.com/api/auth/${user.id}`, user)
            .then(results => {
                props.updateUsers(props.users.map(user => {
                    if (props.users.id === user.id) {
                        return user = results.data
                    } else {
                        return user
                    }

                }))
                window.location = ("/dashboard");
            })
            .catch(err => console.log(err.response));
    };

    const deleteUser = id => {

        axiosWithAuth().delete(`https://build-gigapet.herokuapp.com/api/auth/${id}`)
            .then(results => {
                console.log(results.data)
                props.updateUsers(props.users.filter(user => {
                    return user.id !== id;
                }))
                window.location = ('/dashboard');
            })
            .catch(err => console.log(err));
    };
    console.log(user);
    if (users.length > 0) {
        return (
            <div>

                <p>users</p>
                <div>

                    {props.users.map(user => {
                        return (
                            <div key={user.id}><h3>{user.name}</h3>
                                <h3>{user.email}</h3></div>


                        )
                    })}

                </div>

                <div>
                    {editing && (<form onSubmit={saveEdit}><legend>edit user</legend><label>name:<input onChange={e => setUser({ ...user, user: e.target.value })} value={user.name} /></label><label>email:<input onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} /></label><div className="button-row"><button onClick={() => editUser(user)}>Edit</button>
                        <button onClick={() => setEditing(false)}>cancel</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button></div></form>)}


                </div>
            </div>
        )
    } else {
        return <h1>Loading users...</h1>
    }
}

export default UserCard;