import React, {useState} from "react";
import {Story} from "@storybook/react";

import {Accordion, AccordionProps} from "./Accordion";
import {action} from "@storybook/addon-actions";

const category = (name: string) => ({
    table: {
        category: name
    }
})

export default {
    title: 'Accordion Comp',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...category('Color')

        },
        onChange: {...category('Other')},
        text: {...category('Other')},
        collaps: {...category('Other')},
        items: {...category('Other')}
    }
};

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;


const collback = action("accordion muven chenge event fired")
const onclick =action("element was click")

export const MenuOpen = Template.bind({});
MenuOpen.args = {
    text: "Menu Open",
    collaps: true,
    onChange: collback,
    items: [
        {title: "Nasty", value: 1},
        {title: "Vova", value: 2},
        {title: "Dade", value: 3}
    ],
    onClick: onclick
}

export const MenuClose = Template.bind({});
MenuClose.args = {
    text: "Menu Close",
    collaps: false,
    onChange: collback,
    items: [
        {title: "Nasty", value: 1},
        {title: "Vova", value: 2},
        {title: "Dade", value: 3}
    ],
    onClick: onclick
}

export const MenuAction: Story<AccordionProps> = (args) => {
    const [on, setOn] = useState<boolean>(true)
    return <Accordion {...args} collaps={on} onChange={() => setOn(!on)}/>
}
MenuAction.args = {
    text: "Menu Close",
    items: [
        {title: "Nasty", value: 1},
        {title: "Vova", value: 2},
        {title: "Dade", value: 3}
    ],
    onClick: (id)=>{alert(`csdsc ${id} dfs`)}
}

