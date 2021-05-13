import React from 'react';
import {useSelector} from "react-redux";
import UserItem from "./UserItem";

const UsersList = () => {
    const users = useSelector(state => state.users.users).map(user => <UserItem user={user} key={user.id}/>);
    // const files = useSelector(state => state.files.files).map(file => <File file={file} key={file.id}/>);
    return (
        <div className="users">
            <ul className="users-list">
                <li className="users-list__item">
                    {users}
                </li>
            </ul>
        </div>
    );
};

export default UsersList;
