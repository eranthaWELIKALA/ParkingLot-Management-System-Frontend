import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { success, danger } from "../Util/Alert/Alerts";

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            nic: "",
            password: ""
        }
    }

    handleNICChange = (event) => {
        this.setState({
            nic: event.target.value
        });
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleFormSubmit = (event) => {        
        console.log(this.state);
        this.setState({
            alert: null
        })
        let req = {
            nic: this.state.nic,
            password: this.state.password
        }
        event.preventDefault();
        
        axios.post("http://localhost:8080/user/login", req).then(res=>{
            console.log(res);
            this.setState({
                alert: success("Logged in successfully", false)
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                alert: danger("Login failed", false)
            })
        });
    }

    render() {
        const { nic, password, alert } = this.state
        return (
            <div>
                {alert}
                <div className="container login">
                    <h4 className="mb-3" id="loginHeader">Login</h4>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                NIC : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="text" className="form-control" name="nic" onChange={this.handleNICChange} value={nic} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Password : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="password" className="form-control" name="password" onChange={this.handlePasswordChange} value={password} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-default btn-submit">Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link className="link" to={'/register'}>If this is your firstime Click Here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}