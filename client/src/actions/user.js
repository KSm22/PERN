import axios from "axios";
import {setUser, setAdmin} from "../reducer/userReducer";
import {setUsers} from "../reducer/popleReduser";

export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:3002/auth/registration', {
            email,
            password
        });
        alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
};

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:3002/auth/login', {
                email,
                password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
            console.log(response.data)
        } catch (e) {

        }
    }
};


export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:3002/auth/auth', {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});
            if (response.data.user.role === "ADMIN"){
                dispatch(setAdmin(response.data.user));
            } else{
                dispatch(setUser(response.data.user));
            }
            localStorage.setItem('token', response.data.token);
            // console.log(response.data.user)
        } catch (e) {
            alert(e.response.data.message);
            localStorage.removeItem('token');
        }
    }
};


export const getUsers = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:3002/api/users/users',
                {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});
            dispatch(setUsers(response.data));
        } catch (e) {
            alert(e.response.data.message);
        }
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.post(`http://localhost:3002/api/users/delete/:id`, {
            id
        });

        alert(response.data.message);
    } catch (e) {
        // console.log(e.response.data.message)
    }
};
