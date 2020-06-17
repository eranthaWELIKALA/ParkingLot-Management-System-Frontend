import React from "react";
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
            selectedSlot: null
        }
    }

    componentDidMount(){
        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            }
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
            selectedSlot: null
        })
    }

    colorChange(id){
        if(this.state.selectedSlot!=null){
            document.getElementById(this.state.selectedSlot).style.backgroundColor = "aquamarine";   
        }
        this.setState({
            selectedSlot: id
        })
        document.getElementById(id).style.backgroundColor = "red";    
    }

    render() {
        const { floors, slots, showFloors } = this.state;
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
                                            {floors.map(floor=><Floor key={floor.floorNo} floor={floor} setSlots={this.setSlots.bind(this)}/>)}
                                        </div>
                                    </div>
                                </div>:
                                <div className="container">
                                <div className="row">
                                    <h4>Slots</h4>
                                </div>
                                <div className="row">
                                    <div className="flexBox">
                                        {slots.map(slot=><Slot key={slot.id} slot={slot} colorChange={this.colorChange.bind(this)}/>)}
                                    </div>
                                </div>
                            </div>
                            }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btnFlexBox">
                            <button className="btn btn-primary m-1" onClick={this.changeFloor.bind(this)}>Change Floor</button>
                            <button className="btn btn-primary m-1">Reserve the slot</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}