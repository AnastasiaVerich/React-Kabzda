import React, {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffType} from "./OnOff";



export default {
    title: 'OnOff Comp',
    component: OnOff,

};

const Template: Story<OnOffType> = (args) => <OnOff {...args} />;

const collback = action("you want play ")

export const OnOffTrue = Template.bind({});
OnOffTrue.args = {
    on: true,
    onChange: collback
}

export const OnOffFalse = Template.bind({});
OnOffFalse.args = {
    on: false,
    onChange: collback
}


export const OnOffControled: Story<OnOffType> = (args) => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn}/>
}
