import React, { Component } from "react";

function handleClickOne() {
    alert('You clicked me!');
}

function handleClickTwo() {
    alert('You also clicked me!');
}

export default class Home extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>Send an alert on button press</h2>
                <button onClick={handleClickOne}>Click me!</button>
                <br />
                <button onClick={handleClickTwo}>Click me!</button>
            </div>
        )
    }
}