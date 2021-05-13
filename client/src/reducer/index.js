import {combineReducers, applyMiddleware, createStore} from "redux";
import fileReducer from "./fileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import peopleReducer from "./popleReduser";


const rootReducer = combineReducers({
    files: fileReducer,
    user: userReducer,
    users: peopleReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

