import React, {useEffect, useState} from "react";
import {AnalogCockView} from "./AnalogClock";

type ClockType = {
    mode?: "analog" | "digital"
}

const string = (time: number) => time < 10
    ? "0" + time
    : time

export const Clock: React.FC<ClockType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {


        const intervalId = setInterval(() => {
            setDate((new Date()))
        }, 1000);


        return () => {
            clearInterval(intervalId)
        }
    }, [])
let view
    switch (props.mode){
        case "analog":
            view=<AnalogCockView date={date}/>
            break
        case "digital":
        default:
            view=< DigitalCockView date={date}/>
    }

    return <>
        {view}
    </>
}
export type CockViewTpe={
    date: Date
}
export const DigitalCockView: React.FC<CockViewTpe>=({date})=>{
    return <>
        <span>{string(date.getHours())}</span>
        :
        <span>{string(date.getMinutes())}</span>
        :
        <span>{string(date.getSeconds())}</span>
    </>
}

