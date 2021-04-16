import React from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {RaitingSelf} from "./RaitingSelf";

const category=(name: string)=>({
    table: {
        category: name
    }
})

export default {
    title: 'RaitingSelf Comp',
    component: RaitingSelf,

};

const Template: Story = (args) => <RaitingSelf {...args} />;


export const Star1 = Template.bind({});
Star1.args = {

}