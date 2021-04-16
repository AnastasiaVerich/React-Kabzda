import React, {useReducer} from "react";
import {AccordionProps, reduce} from "./Reducer";

export function AccordionSelf(props: AccordionProps) {
    console.log("1")
   // let [on, setOn] = useState(false)
    let [state, dispatch] = useReducer(reduce,{on:false})


    return (
        <div>
           {/* <AccordionTitle title={props.text} onClick={() => {setOn(!on)}}/>*/}
            <AccordionTitle title={props.text} onClick={()=>{
                dispatch({type: "KKK"})}}/>
            {state.on && <AccordionBody/>}
        </div>
    )
}


type AccordionTitleProps = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log("2")
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("3")
    return (
        <div>
            <ul>
                <li>
                    menu
                </li>
                <li>
                    sms
                </li>
                <li>
                    music
                </li>
                <li>
                    video
                </li>
            </ul>
        </div>
    )
}