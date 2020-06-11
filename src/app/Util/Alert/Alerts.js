import React from 'react';

var primary =  function alert(message, close){
    const alert = (
    <div className="alert alert-primary" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var secondary =  function alert(message, close){
    const alert = (
    <div className="alert alert-secondary" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var success =  function alert(message, close){
    const alert = (
    <div className="alert alert-success" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var danger =  function alert(message, close){
    const alert = (
    <div className="alert alert-danger" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var warning =  function alert(message, close){
    const alert = (
    <div className="alert alert-alert" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var info =  function alert(message, close){
    const alert = (
    <div className="alert alert-info" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var light =  function alert(message, close){
    const alert = (
    <div className="alert alert-light" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}
var dark =  function alert(message, close){
    const alert = (
    <div className="alert alert-dark" role="alert">
        {message}
        {close?<button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>:null}
    </div>
    );
    return alert;
}

export {primary, secondary, success, danger, warning, info, light, dark}