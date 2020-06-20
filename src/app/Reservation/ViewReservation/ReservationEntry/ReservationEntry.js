import React from 'react';
import PropTypes from 'prop-types';
import "./ReservationEntry.css";

export class ReservationEntry extends React.Component {

    handleStartTime = (index) =>{
        if(index==0){
            return "06:00AM"
        }
        else if(index==1){
            return "07:00AM"
        }
        else if(index==2){
            return "08:00AM"
        }
        else if(index==3){
            return "09:00AM"
        }
        else if(index==4){
            return "10:00AM"
        }
        else if(index==5){
            return "11:00AM"
        }
        else if(index==6){
            return "12:00PM"
        }
        else if(index==7){
            return "01:00PM"
        }
        else if(index==8){
            return "02:00PM"
        }
        else if(index==9){
            return "03:00PM"
        }
        else if(index==10){
            return "04:00PM"
        }
        else if(index==11){
            return "05:00PM"
        }
        else if(index==12){
            return "06:00PM"
        }
        else{
            return ""
        }
    }
    render() {
        return (
            <div className="container m-1 entry">
                <div className="row">
                    <div className="col-md-12">
                        {new Date(this.props.reservation.date).toDateString()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.handleStartTime(this.props.reservation.startTime)} - {this.handleStartTime(this.props.reservation.endTime)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.reservation.vehicleNo}
                    </div>
                </div>
            </div>
        )
    }
}

ReservationEntry.propsTypes = {
    reservation: PropTypes.object
}