import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Component/Accordion/Accordion";
import {Raiting} from "./Component/Raiting/Raiting";
import {OnOff} from "./Component/OnOff/OnOff";
import {AccordionSelf} from "./Component/AccordionSelf/AccordionSelf";
import {RaitingSelf} from "./Component/RaitingSelf/RaitingSelf";
import {OnOffSelf} from "./Component/OnOffSelf/OnOffSelf";
import {Select} from "./Component/Select/Select";


function App() {

    let [reiV, setValueV] = useState(0)
    let [collapsV, setCollaps] = useState(true)
    let [on, setOn] = useState(false)
    const [val, setValue] = useState("2")

    let items = [
        {title: "Nasty", value: 1},
        {title: "Vova", value: 2},
        {title: "Dade", value: 3}
    ]
    let itemsSelect = [
        {title: "Nasty", value: "1"},
        {title: "Vova", value: "2"},
        {title: "Dade", value: "3"}
    ]

     const AccordionX=React.memo(Accordion)

    return (
        <div className={"App"}>

            <PageTitle title={"PROPS, CONTROL"}/>

            <OnOff on={on} onChange={setOn}/>
            <Raiting rei={reiV} setValueV={setValueV}/>
            <AccordionX text={"MenuSome"}
                       collaps={collapsV}
                       onChange={setCollaps}
                       items={items}
                       onClick={x => x}/>
            <Select onChange={setValue} items={itemsSelect} value={val}/>

            <PageTitle title={"UNCONRTOL(selfcontrol) COMPONENT"}/>

            <RaitingSelf/>
            <OnOffSelf onChange={setOn}/> {on.toString()}
            <AccordionSelf text={"MenuCLICK"}/>


        </div>
    )
        ;
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}


export default App;
