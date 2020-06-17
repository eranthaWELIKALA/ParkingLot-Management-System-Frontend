import React from 'react';
import PropTypes from 'prop-types';
import "./Slot.css";

export class Slot extends React.Component {
    handleClickEvent() {
        this.props.colorChange(this.props.slot.id);
    }

    render() {
        return (
            <div>
                <div id={this.props.slot.id} className="slot m-1" onClick={this.handleClickEvent.bind(this)}>
                    <label>Slot Id: {this.props.slot.id}</label><br/>
                    <label>Floor No: {this.props.slot.floorNo}</label>
                </div>
            </div>
        )
    }
}

Slot.propsTypes = {
    slot: PropTypes.object,
    colorChange: PropTypes.func
}