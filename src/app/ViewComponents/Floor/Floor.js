import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import "./Floor.css";

export class Floor extends React.Component {
    constructor(){
        super();
        this.state = {
            slots: [],
            showSlots: true
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
        
        axios.get("http://localhost:8080/slot/getByFloorNo?floorNo=" + this.props.floor.floorNo, options).then(res=>{
            console.log(res);            
            if(res.data.length!=0){
                this.setState({
                    slots: res.data
                })
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }

    showSlots(){
        this.props.setSlots(this.state.slots)
    }

    render() {
        return (
            <div>
                {             
                    <div className="floor m-1" onClick={this.showSlots.bind(this)}>
                        {this.props.floor.floorNo}
                    </div>
                }
            </div>
        )
    }
}

Floor.propsTypes = {
    floor: PropTypes.object,
    setSlots: PropTypes.func
}