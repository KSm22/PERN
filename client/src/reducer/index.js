import {combineReducers, applyMiddleware, createStore} from "redux";
import fileReducer from "./fileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    files: fileReducer,
    user: userReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

