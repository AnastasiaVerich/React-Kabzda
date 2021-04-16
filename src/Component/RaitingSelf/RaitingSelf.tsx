import React, {useState} from "react";


export function RaitingSelf() {
    let [rei, setRei] = useState(0)
    return (
        <div>
            <Star selected={rei > 0} onClick={() => {
                setRei(1)
            }}/>
            <Star selected={rei > 1} onClick={() => {
                setRei(2)
            }}/>
            <Star selected={rei > 2} onClick={() => {
                setRei(3)
            }}/>
            <Star selected={rei > 3} onClick={() => {
                setRei(4)
            }}/>
            <Star selected={rei > 4} onClick={() => {
                setRei(5)
            }}/>
        </div>
    );
}

type StarProps = {
    selected: boolean
    onClick: ()=> void
}

function Star(props: StarProps) {
    console.log("Star count")
    return <span onClick={props.onClick}>{props.selected ? <b>star </b>: 'star '}</span>
}