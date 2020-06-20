import React from "react";
import PropTypes from "prop-types";
import "./Slot.css";
import slotBackground from "../../../../assets/slot.png";

export class Slot extends React.Component {
    constructor(props){
        super();
        this.state ={
            imgClass: props.slot.reservational?'backgroundMovingImage':'backgroundImage',
            slotStyle: {
                backgroundColor: props.slot.reservational?`aquamarine`:`red`
            }
        }
    }
    handleClickEvent() {
        if(!this.props.slot.reservational){
            console.log("This slot can not be reserved");
            return
        }
        this.props.selectSlot(this.props.slot.id);
    }

    render() {
        const { imgClass, slotStyle } = this.state;
        return (
            <div>
                <div id={this.props.slot.id} className="slot m-1" onClick={this.handleClickEvent.bind(this)} style={slotStyle}>
                <img className={imgClass} src={slotBackground}></img>
                    <label>{this.props.slot.id}</label><br/>
                </div>
            </div>
        )
    }
}

Slot.propsTypes = {
    slot: PropTypes.object,
    selectSlot: PropTypes.func
}