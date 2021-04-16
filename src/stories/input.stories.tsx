import React, {ChangeEvent,  useRef, useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input'

};

const Template: Story = (args) => <input {...args} />;


export const InputSelfGetValue = () => {
    const [value, setValue] = useState<string>("")
    return <>
        <input onChange={(e)=> setValue(e.currentTarget.value)}/>
        {value}
        </>
}

export const InputSelfGetValueByButton = () => {
    const [value, setValue] = useState<string>("")
    let vvv= ""
    const collback=(e: ChangeEvent<HTMLInputElement>) => vvv=e.currentTarget.value
    return <>
        <input onChange={collback}/>
        <button onClick={()=>{setValue(vvv)}}>save</button>-
        {value}
    </>
}

export const InputSelfGetValueByButtonRef = () => {
    const [value, setValue] = useState<string>("")
    const vvv= useRef<HTMLInputElement>(null)
    const save =()=> { const el = vvv.current as HTMLInputElement; setValue(el.value)}
    return <>
        <input ref={vvv} />
        <button onClick={save}>save</button>-
        {value}
    </>
}

export const controledInputFix = Template.bind({});
controledInputFix.args = {
    value: "55544466325"
}

export const InputContr = () => {
    const [val, setValue] = useState<string>("")
    debugger
    const collback =(e: ChangeEvent<HTMLInputElement>)=>{
        debugger
        setValue(e.currentTarget.value)
    }
    return <>
        <input value={val} onChange={collback}/>
    </>
}

export const CheckBoxContr = () => {
    const [val, setValue] = useState<boolean>(true)
    const collback =(e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.checked)
    }
    return <>
        <input type="checkbox"  checked={val} onChange={collback}/>
    </>
}

export const SelectedContr = () => {
    const [val, setValue] = useState<string | undefined>(undefined)
    const collback =(e: ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }
    return <>
        <select value={val} onChange={collback}>
            <option>none</option>
            <option value={"1"}>MINSK</option>
            <option value={"2"}>MOSKOW</option>
            <option value={"3"}>TELEHANI</option>
        </select>
    </>
}