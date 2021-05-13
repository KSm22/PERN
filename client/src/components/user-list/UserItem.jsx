import React from 'react';

const UserItem = ({user}) => {
    return (
        <div>
            <span>{user.role} |   {user.email}</span>
        </div>
    );
};

export default UserItem;
