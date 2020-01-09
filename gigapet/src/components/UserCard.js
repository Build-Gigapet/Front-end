import React, { useState } from 'react';
import axiosWithAuth from "../axiosWithAuth";
const initialUser = {

    id: new Date(),
    name: "",
    email: ""
};
const UserCard = props => {

    const [editing, setEditing] = useState(false);
    const [userToEdit, setUserToEdit] = useState(initialUser);

    const editUser = user => {
        setEditing(true);
        setUserToEdit(user);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://build-gigapet.herokuapp.com/api/auth/${userToEdit.id}`, userToEdit)
            .then(results => {
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
            <h3>{props.users.name}</h3>
            <h3>{props.users.email}</h3>


            {/* <form>
                <h3>Edit  name and email here</h3>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="email" />
                <button onClick={editUser}>EDIT</button>
                <button className="md-button" onClick={deleteUser}>DELETE</button>

                <input type="submit" value="submit" />
            </form> */}
        </div>

    )

}

export default UserCard;