import React from "react";
import styled from "styled-components";
import Waiting from "../Waiting/Waiting";
import "./OrderStatus.css";

function OrderStatus(props) {

    const number = 1234; 
    let type = 0;

    if( props.id.type == "Complet") {
        type =1;
    }

    return (
        <div className="wrapper">
            <div><div className={"state"+props.id.type}>{props.id.title}</div></div>
            <div><div className="stateScrpit">{props.id.script}</div></div>
            <div>
                <div className="stateBody">
                    <div className={"stateBody"+props.id.type}>
                    <Waiting num="001" boxType = {type}/>
                    <Waiting num="0002" boxType = {type}/>
                    <Waiting num="0003" boxType = {type}/>
                    <Waiting num="0004" boxType = {type}/>
                    <Waiting num="0005" boxType = {type}/>
                    <Waiting num="0007" boxType = {type}/>
                    <Waiting num="0008" boxType = {type}/>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default OrderStatus;