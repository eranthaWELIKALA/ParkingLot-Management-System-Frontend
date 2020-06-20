import React from "react";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Slot } from "../../ViewComponents/Slot/Slot";
import { Floor } from "../../ViewComponents/Floor/Floor";
import "./CreateReservation.css";

export class CreateReservation extends React.Component {
    constructor() {
        super();
        this.state = {
            showFloors: true,
            floors: [],
            slots: [],
            selectedFloor: null,
            selectedSlot: null,
            date: "",
            startTime: "",
            noOfHours: 0,
            vehicleNo: ""
        }  
        this.CancelToken = axios.CancelToken;
        this.source = this.CancelToken.source();      
    }   

    componentDidMount(){
        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            },
            cancelToken: this.source.token
        }
        axios.get("http://localhost:8080/floor/get", options).then(res=>{
            console.log(res);
            if(res.data.length!=0){
                this.setState({
                    floors: res.data
                })
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }

    componentWillUnmount(){
        this.source.cancel("Operation was terminated");
    }

    setSlots(slots){
        if(slots.length!=0){
            this.setState({
                showFloors: false,
                slots: slots
            })
        }
    }

    changeFloor(){
        this.setState({
            showFloors: true,
            slot: [],
            selectedFloor: null,
            selectedSlot: null
        })
    }

    selectFloor(floorNo){
        this.setState({
            selectedFloor: floorNo
        })   
    }

    selectSlot(id){
        if(this.state.selectedSlot!=null){
            var element = document.getElementById(this.state.selectedSlot);
            element.style.backgroundColor = "aquamarine";   
            element.firstChild.className = "backgroundMovingImage"; 
        }
        this.setState({
            selectedSlot: id
        })
        var element = document.getElementById(id);
        element.style.backgroundColor = "yellow";  
        element.firstChild.className = "backgroundImage";
    }

    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    handleStartTimeChange = (event) => {
        this.setState({
            startTime: event.target.value
        })
    }

    handleNoOfHoursChange = (event) => {
        this.setState({
            noOfHours: event.target.value
        })
    }

    handleVehicleNoChange = (event) => {
        this.setState({
            vehicleNo: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            }
        }
        const req = {
            user_nic: "950680245V",
            slotId: this.state.selectedSlot,
            vehicleNo: this.state.vehicleNo,
            date: this.state.date,
            startTime: parseInt(this.state.startTime),
            endTime: parseInt(this.state.startTime) + parseInt(this.state.noOfHours),
            checkedIn: false,
            checkedOut: false
            
        }
        console.log(req);
        axios.post("http://localhost:8080/reservation/create", req, options).then(res=>{
            console.log(res);
            if(res.data.length!=0){
                console.log(res.data);
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render() {
        if (this.props.redirect) {
            return <Redirect to={this.props.redirect} />
        }
        const { floors, slots, showFloors, selectedFloor, selectedSlot, date, startTime, noOfHours, vehicleNo } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            {
                            showFloors?
                                <div className="container">
                                    <div className="row">
                                        <h4>Floors</h4>
                                    </div>
                                    <div className="row">
                                        <div className="flexBox">
                                            {floors.map(floor=><Floor key={floor.floorNo} floor={floor} setSlots={this.setSlots.bind(this)} selectFloor={this.selectFloor.bind(this)}/>)}
                                        </div>
                                    </div>
                                </div>:
                                <div className="container">
                                <div className="row">
                                    <h4>Slots</h4>
                                </div>
                                <div className="row">
                                    <div className="flexBox">
                                        {slots.map(slot=><Slot key={slot.id} slot={slot} selectSlot={this.selectSlot.bind(this)}/>)}
                                    </div>
                                </div>
                            </div>
                            }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btnFlexBox">
                            {selectedFloor!=null?<button className="btn btn-primary m-1" onClick={this.changeFloor.bind(this)}>Change Floor</button>:null}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                            {
                            selectedSlot!=null?
                            <form onSubmit={this.handleFormSubmit} method="POST">                                
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        Floor No : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <input type="text" className="form-control" name="floorNo" value={selectedFloor} readOnly/>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        Slot No : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <input type="text" className="form-control" name="slotId" value={selectedSlot} readOnly/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        Date : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <input type="date" className="form-control" name="date" onChange={this.handleDateChange.bind(this)} value={date} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        In time : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <select className="form-control" name="startTime" onChange={this.handleStartTimeChange.bind(this)} value={startTime} required>
                                            <option value="" disabled>...</option>
                                            <option value="0">06:00AM</option>
                                            <option value="1">07:00AM</option>
                                            <option value="2">08:00AM</option>
                                            <option value="3">09:00AM</option>
                                            <option value="4">10:00AM</option>
                                            <option value="5">11:00AM</option>
                                            <option value="6">12:00PM</option>
                                            <option value="7">01:00PM</option>
                                            <option value="8">02:00PM</option>
                                            <option value="9">03:00PM</option>
                                            <option value="10">04:00PM</option>
                                            <option value="11">05:00PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        No. of hours : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <input type="number" className="form-control" name="noOfHours" onChange={this.handleNoOfHoursChange.bind(this)} value={noOfHours} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        Vehicle No : 
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-8 col-xs-8">
                                        <input type="text" className="form-control" name="vehicleNo" onChange={this.handleVehicleNoChange.bind(this)} value={vehicleNo} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" className="btn btn-default btn-submit">Reserve the selected slot</button>
                                    </div>
                                </div>
                            </form>
                            
                            :null}
                    </div>
                </div>
            </div>
        )
    }
}

CreateReservation.propsTypes = {
    redirect: PropTypes.string
}