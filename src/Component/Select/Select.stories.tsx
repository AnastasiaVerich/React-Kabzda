import React, {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Select, SelectType} from "./Select";


export default {
    title: 'Select Comp',
    component: Select
}


const Template: Story<SelectType> = (args) => <Select {...args} />;

export const SelectWithValue = Template.bind({});
SelectWithValue.args = {
    value: "2",
    items: [
        {title: "Nasty", value: "1"},
        {title: "Vova", value: "2"},
        {title: "Dade", value: "3"}
    ],
    onChange: action("cjk")
}

export const SelectWithautValue = Template.bind({});
SelectWithautValue.args = {
    items: [
        {title: "Nasty", value: "1"},
        {title: "Vova", value: "2"},
        {title: "Dade", value: "3"}
    ],
    onChange: action("cjk")
}

export const SelectSet = () => {
    const [val, setValue] = useState("2")
    return<>
    <Select onChange={setValue}
            value={val}
            items={[
                {title: "Nasty", value: "1"},
                {title: "Vova", value: "2"},
                {title: "Dade", value: "3"}
            ]}/>
    </>

}
export const SelectSetWithautValue = () => {
    const [val, setValue] = useState("")
    return<>
        <Select onChange={setValue}
                value={val}
                items={[
                    {title: "Nasty", value: "1"},
                    {title: "Vova", value: "2"},
                    {title: "Dade", value: "3"}
                ]}/>
    </>

}