import React from "react";
import "./Waiting.css";

function Waiting(props) {

    return (
            <button className={"numberBox"+props.boxType} >{props.num}</button>
    );
}

export default Waiting;