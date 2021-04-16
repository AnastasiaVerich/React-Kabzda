import React from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOffSelf, onOffSelfProps} from "./OnOffSelf";



export default {
    title: 'OnOffSelf Comp',
    component: OnOffSelf,

};

const Template: Story<onOffSelfProps> = (args) => <OnOffSelf {...args} />;

const collback = action("you want play ")

export const OnOff = Template.bind({});
OnOff.args = {
    onChange: collback
}

