import React from "react";
import {AccordionSelf} from "./AccordionSelf";
import {Story} from "@storybook/react";
import {AccordionProps} from "./Reducer";



export default {
    title: 'AccordionSelf Comp',
    component: AccordionSelf,

};

const Template: Story<AccordionProps> = (args) => <AccordionSelf {...args} />;


export const MenuOpen = Template.bind({});
MenuOpen.args = {
    text: "Menu Open"
}