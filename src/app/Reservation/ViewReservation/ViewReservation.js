import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ReservationEntry } from "./ReservationEntry/ReservationEntry";

export class ViewReservation extends React.Component {
    constructor() {
        super();
        this.state = {
            reservations: []
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
        axios.get("http://localhost:8080/reservation/get", options).then(res=>{
            console.log(res);
            if(res.data.length!=0){
                this.setState({
                    reservations: res.data
                })
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
        const { reservations } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            {
                            reservations.length>0?
                                <div className="container">
                                    <div className="row">
                                        <h4>Reservations</h4>
                                    </div>
                                    <div className="row">
                                        <div className="flexBox">
                                            {reservations.map(reservation=><ReservationEntry key={reservation.id} reservation={reservation}/>)}
                                        </div>
                                    </div>
                                </div>:
                                <div className="container">
                                <div className="row">
                                    <h4>No reservations</h4>
                                </div>
                            </div>
                            }
                    </div>
                </div>
            </div>
        )
    }
}