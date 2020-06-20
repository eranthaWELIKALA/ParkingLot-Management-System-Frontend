import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends React.Component {
    handleLogout(){
        this.props.updateLoggedInUser(null);
    }
    render(){
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="/">PLMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/view_reservation"}>Reservations</NavLink>
                        </li>
                        {this.props.loggedInUser!=null?
                        <li className="nav-item dropdown">
                            <a className="nav-link btn dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                {this.props.loggedInUser.firstname}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="btn dropdown-item" onClick={this.handleLogout.bind(this)}>Logout</a>
                            </div>
                        </li>:
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/login"} activeStyle={{color: "green"}}>Login</NavLink>
                        </li>
                        }
                    </ul>
                </div>  
                </nav>
        )
    }
}

Header.propsTypes = {
    loggedInUser: PropTypes.object,
    updateLoggedInUser: PropTypes.func
}