import React, { Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { CreateReservation } from "./Reservation/CreateReservation/CreateReservation";
import { ViewReservation } from "./Reservation/ViewReservation/ViewReservation";

class App extends Component{
  constructor(){
    super();
    let user = localStorage.getItem("loggedInUser");
    if(user==undefined){
      user = null;
    }
    this.state = {
      loggedInUser: JSON.parse(user)
    }
  }

  updateLoggedInUser(user){
    if(user==null){
      localStorage.removeItem("loggedInUser");      
      this.setState({
        loggedInUser: null,
        redirect: "/"
      });
    }
    else{
      this.setState({
        loggedInUser: user
      });
    }
  }

  resetRedirect(){
    this.setState({
      redirect: null
    })
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Header loggedInUser={this.state.loggedInUser} updateLoggedInUser={this.updateLoggedInUser.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={() => <Login updateLoggedInUser={this.updateLoggedInUser.bind(this)} redirect={this.state.redirect} resetRedirect={this.resetRedirect.bind(this)}/>}/>
            <Route path="/register" component={() => <Register updateLoggedInUser={this.updateLoggedInUser.bind(this)} redirect={this.state.redirect}/>}/>
            <Route path="/create_reservation" component={() => <CreateReservation redirect={this.state.redirect}/>}/>
            <Route path="/view_reservation" component={() =><ViewReservation  redirect={this.state.redirect}/>}/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 