import React from "react";


type itemType={
    title: string
    value: any
}

export type AccordionProps = {
    text: string
    collaps: boolean
    items: itemType[]
    /**
     * function for change state of menu( on off)
     * @param on
     */
    onChange: (on: boolean) => void
    /**
     * backgraund color
     */
    color?: string
    onClick: (v: any)=> void
}

export function Accordion(props: AccordionProps) {

    return (
        <div>
            <AccordionTitle title={props.text}
                            onChange={() => {
                                props.onChange(!props.collaps)
                            }}
                            color={props.color}/>
            {props.collaps && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )


}


type AccordionTitleProps = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyProps = {
    items: itemType[]
    onClick: (v: any)=> void
}

function AccordionBody(props: AccordionBodyProps) {
    return (
        <div>
            <ul>
                {props.items.map((el, index)=><li onClick={()=>props.onClick(el.value)} key={index}>{el.title}</li>)}
            </ul>
        </div>
    )
}