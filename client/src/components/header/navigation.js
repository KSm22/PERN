import React from "react";
import { Link, NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducer/userReducer";
import {getUsers} from "../../actions/user";

const Navigation = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const isAdmin = useSelector(state => state.user.isAdmin);
    const dispatch = useDispatch();

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <Link to="/">Upload</Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/editor">Editor</Link>
                </li>

                {isAdmin && <li className="nav-list__item">
                    <NavLink to="/users" onClick={() => dispatch(getUsers())}>Users</NavLink>
                </li>}

                {!isAuth && <li className="nav-list__item"><NavLink to="/login">Войти</NavLink></li> }
                {!isAuth && <li className="nav-list__item"><NavLink to="/registration">Регистрация</NavLink></li> }
                {isAuth && <li className="nav-list__item" onClick={() => dispatch(logout())}>Выход</li> }
            </ul>
        </nav>
    )
};

export default Navigation;
