import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from "./App";
import Home from "./Home/Home";
import Login from "./Login/Login";

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    }
}

render(<Root/>, document.getElementById("root"));