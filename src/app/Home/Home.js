import React from "react";
import PropTypes from 'prop-types';
import "./Home.css";

export class Home extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <div className="container home">
                    <img className="homeImage" src="https://i.pinimg.com/originals/d1/c1/7a/d1c17a76f622ad6df31be012d878db8a.jpg"></img>
                    <h4 id="homeHeader">PLMS- Parking Lot Management System</h4>
                </div>
            </div>
        )
    }
}

Home.propsTypes = {
    resetRedirect: PropTypes.func
}