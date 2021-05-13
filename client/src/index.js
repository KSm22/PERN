import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './style.css'
import App from "./components/app/app";
import {store} from "./reducer";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
