import React, {useState} from "react";

export type onOffSelfProps={
    onChange: (on: boolean)=>void
}


export function OnOffSelf(props: onOffSelfProps) {

  let[on, setOn] = useState(false) //hook


    const OnStyle = {
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"

    }
    const OffStyle ={
        width: "40px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"

    }
    const indStyle={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"

    }

    const onClicked=()=> {
        setOn(true); props.onChange(true)
    }
    const ofClicked=()=>{setOn(false); props.onChange(false)}
    return(

        <div>
            {console.log("OnOffSELF")}
            <div
                style={OnStyle}
                onClick={onClicked}
            >
                On
            </div>
            <div style={OffStyle} onClick={ofClicked}>Off </div>
            <div style={indStyle}> </div>
        </div>
    )
}
