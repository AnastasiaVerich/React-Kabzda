import React from "react";

export type RaitingProps = {
    rei: number
    setValueV: any
}

export function Raiting(props: RaitingProps) {

    return (
        <div>  {console.log("Raiting")}
            <Star selected={props.rei > 0} setR={() => { props.setValueV(1) }}/>
            <Star selected={props.rei > 1} setR={() => { props.setValueV(2) }}/>
            <Star selected={props.rei > 2} setR={() => { props.setValueV(3) }}/>
            <Star selected={props.rei > 3} setR={() => { props.setValueV(4) }}/>
            <Star selected={props.rei > 4} setR={() => { props.setValueV(5) }}/>
        </div>
    );
}

type StarProps = {
    selected: boolean
    setR: any
}

function Star(props: StarProps) {
    return <span onClick={props.setR} >{props.selected ? <b>star </b>: 'star '}</span>

}