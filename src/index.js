import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import Store from "./store"
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , 
    document.getElementById("root")
);