import React from "react";

export type OnOffType={
    on: boolean
    onChange: (on: boolean)=> void
}

export function OnOff(props: OnOffType) {



    const OnStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"

    }
    const OffStyle ={
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red"

    }
    const indStyle={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"

    }
    return(
        <div>
            {console.log("OnOff")}
            <div style={OnStyle} onClick={()=>{props.onChange(true)}} >On</div>
            <div style={OffStyle} onClick={()=>{props.onChange(false)}}>Off </div>
            <div style={indStyle}> </div>
        </div>
    )
}
