import React, {useState} from "react";

import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Raiting, RaitingProps} from "./Raiting";

const category=(name: string)=>({
    table: {
        category: name
    }
})

export default {
    title: 'Raiting Comp',
    component: Raiting,
    argTypes: {
        color:{
            control: 'color',
            ...category('Color')

        },
        rei:{...category('Other')},
        setValueV:{...category('Other')}
    }
};

const Template: Story<RaitingProps> = (args) => <Raiting {...args} />;

const collback = action("accordion muven chenge event fired")
const onClockCallBack = action("sone click")

export const Star1 = Template.bind({});
Star1.args = {
    rei: 1,
    setValueV: collback
}

export const Star2 = Template.bind({});
Star2.args = {
    rei: 2,
    setValueV: collback
}
export const Star3 = Template.bind({});
Star3.args = {
    rei: 3,
    setValueV: collback
}
export const Star4 = Template.bind({});
Star4.args = {
    rei: 4,
    setValueV: collback
}
export const Star5 = Template.bind({});
Star5.args = {
    rei: 5,
    setValueV: collback
}
export const StarControled: Story<RaitingProps> = (args) => {
    const [on, setOn] = useState<number>(2)
    return <Raiting {...args} rei={on} setValueV={setOn}/>
}