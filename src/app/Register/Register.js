import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { success, danger } from "../Util/Alert/Alerts";

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            nic: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            contactNo: "",
            type: "",
            subscriptionType: "",
            validation: {
                nic: true,
                password: true,
                firstname: true,
                lastname: true,
                email: true,
                contactNo: true,
                type: true,
                subscriptionType: true
            }
        }
    }

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        });
    }
    
    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    handleNICChange = (event) => {
        this.setState({
            nic: event.target.value
        });
    }
    
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleContactNoChange = (event) => {
        this.setState({
            contactNo: event.target.value
        });
    }
    
    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value
        });
    }

    handleSubscriptionTypeChange = (event) => {
        this.setState({
            subscriptionType: event.target.value
        });
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    nicValidation(nic){
        console.log(nic[nic.length-1])
        let result = false;
        if(nic==undefined){
            return result;
        }
        else if(nic==null){
            return result;
        }
        else if(nic==""){
            return result;
        }
        else if(nic[nic.length-1]!="V" && nic[nic.length-1]!="X"){
            return result;
        }
        else{
            return true;
        }
    }

    passwordValidation(password){
        let result = false;
        if(password==undefined){
            return result;
        }
        else if(password==null){
            return result;
        }
        else if(password==""){
            return result;
        }
        else if(password.length<8){
            return result;
        }
        else{
            return true;
        }
    }

    emailValidation(email){
        let result = false;
        if(email==undefined){
            return result;
        }
        else if(email==null){
            return result;
        }
        else if(email==""){
            return result;
        }
        else if(!email.includes("@") && !email.includes(".")){
            return result;
        }
        else{
            return true;
        }
    }

    validateUserDetails(req){
        let result = true;
        let prev_validation = this.state.validation;
        if(!this.nicValidation(req.nic)){
            prev_validation.nic = false;
            result = false;
        }
        else{
            prev_validation.nic = true;
        }
        if(!this.passwordValidation(req.password)){
            prev_validation.password = false;
            result = false;
        }
        else{
            prev_validation.password = true;
        }
        if(!this.emailValidation(req.email)){
            prev_validation.email = false;
            result = false;
        }
        else{
            prev_validation.email = true;
        }
        this.setState({
            validation: prev_validation
        });
        return result;
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        this.setState({
            alert: null
        })
        let req = {
            nic: this.state.nic,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            contactNo: this.state.contactNo,
            type: this.state.type,
            subscriptionType: this.state.subscriptionType
        }
        event.preventDefault();
        
        if(this.validateUserDetails(req)){
            axios.post("http://localhost:8080/user/create", req).then(res=>{
                console.log(res);
                this.setState({
                    alert: success("User account was created successfully", false)
                })
            })
            .catch(err=>{
                console.log(err);
                this.setState({
                    alert: danger("User account was failed to create", false)
                })
            });
        }
    }

    render() {
        const { nic, password, firstname, lastname, email, contactNo, type, subscriptionType, alert, validation} = this.state
        return (
            <div>
                {alert}
                <div className="container register">
                    <h4 className="mb-3" id="registerHeader">Register</h4>
                    <form onSubmit={this.handleFormSubmit.bind(this)}>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Firstname : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="text" className="form-control" name="firstname" onChange={this.handleFirstnameChange.bind(this)} value={firstname}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Lastname : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="text" className="form-control" name="lastname" onChange={this.handleLastnameChange.bind(this)} value={lastname}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                NIC : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="text" className="form-control" name="nic" onChange={this.handleNICChange.bind(this)} value={nic}/>
                            </div>
                        </div>
                        {!validation.nic?<div className="alert alert-danger" role="alert">NIC is invalid</div>:null}
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Email : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="email" className="form-control" name="email" onChange={this.handleEmailChange.bind(this)} value={email}/>
                            </div>
                        </div>
                        {!validation.email?<div className="alert alert-danger" role="alert">Email is invalid</div>:null}
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Contact No : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="text" className="form-control" name="contactNo" onChange={this.handleContactNoChange.bind(this)} value={contactNo}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Type : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <select className="form-control" name="type" onChange={this.handleTypeChange.bind(this)} value={type}>
                                    <option value="" disabled>...</option>
                                    <option value="REGISTERED">Registered User</option>
                                    <option value="UNREGISTERED">Un-Registered User</option>
                                </select>
                            </div>
                        </div>
                        {type == "REGISTERED"?
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Pay : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <select className="form-control" name="subscriptionType" onChange={this.handleSubscriptionTypeChange.bind(this)} value={subscriptionType}>
                                    <option value="" disabled>...</option>
                                    <option value="MONTHLY">Month by month</option>
                                    <option value="DAILY">Day by day</option>
                                </select>
                            </div>
                        </div>: null}
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                Password : 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                <input type="password" className="form-control" name="password" onChange={this.handlePasswordChange.bind(this)} value={password}/>
                            </div>
                        </div>
                        {!validation.password?<div className="alert alert-danger" role="alert">Password is invalid</div>:null}
                        <div className="row">
                            <div className="col">
                                <Link className="link" to={'/login'}>Go back</Link>
                                <button type="submit" className="btn btn-default btn-submit">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}