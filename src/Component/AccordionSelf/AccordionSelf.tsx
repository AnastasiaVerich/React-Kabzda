import React, {useReducer} from "react";
import {AccordionProps, reduce} from "./Reducer";

export function AccordionSelf(props: AccordionProps) {
   // let [on, setOn] = useState(false)
    let [state, dispatch] = useReducer(reduce,{on:false})


    return (

        <div>
            {console.log("accordionSELF")}
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

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
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