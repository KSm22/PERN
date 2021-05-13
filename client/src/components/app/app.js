import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Navigation from "../header/navigation";
import UploadButton from "../upload-button/upload-button";
import Editor from "../editor/editor";
import Registration from "../authorization/Registration";
import Login from "../authorization/login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../actions/user";
import UsersList from "../user-list/UsersList";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const isAdmin = useSelector(state => state.user.isAdmin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, []);

    return (
        <div className="container">
            <Router>
                <Navigation/>
                {!isAuth ?
                    <Switch>
                        <Route path="/registration" component={Registration}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Redirect to='/login'/>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/"
                               component={UploadButton}
                               exact/>
                        <Route path="/editor" component={Editor}/>
                        {isAdmin && <Route path="/users" component={UsersList} />}
                        <Redirect to='/'/>
                    </Switch>
                }

            </Router>
        </div>
    )
};

export default App;
