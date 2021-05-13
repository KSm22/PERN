import React from 'react';
import {deleteUser} from "../../actions/user";

const UserItem = ({user}) => {
    return (
        <div>
            <span>Role: {user.role} | Email: {user.email}</span>
            <a href={`http://localhost:3002/api/users/delete/${user.id}`} onClick={() => deleteUser()}> Удалить </a>
        </div>
    );
};

export default UserItem;
