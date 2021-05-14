import React, {useEffect, useState} from "react";

type ClockType = {}

const string = (time: number) => time < 10
    ? "0" + time
    : time

export const Clock: React.FC<ClockType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {


     const intervalId= setInterval(() => {
            setDate((new Date()))
        }, 1000);


        return()=>{
            clearInterval(intervalId)
        }
    }, [])


    return <>
        <span>{string(date.getHours())}</span>
        :
        <span>{string(date.getMinutes())}</span>
        :
        <span>{string(date.getSeconds())}</span>


    </>
}