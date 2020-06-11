import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
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
                            <NavLink className="nav-link" to={"/login"} activeStyle={{color: "green"}}>Login</NavLink>
                        </li>
                    </ul>
                </div>  
                </nav>
        )
    }
}