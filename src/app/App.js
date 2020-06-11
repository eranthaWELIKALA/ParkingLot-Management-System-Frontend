import React, { Component} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

class App extends Component{
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 