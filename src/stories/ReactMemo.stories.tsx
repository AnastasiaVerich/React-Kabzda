import {Story} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: 'RactMemo'

};


const CounterNum =(props: { count: number })=>{
    console.log("NUMBER")
    return <div>{props.count}</div>
}

const UsersTabl =(props: { users:string[] })=>{
    console.log("USERS")
    return <div>{props.users.map((u, i)=>{return<div key={i}>{u}</div>})}</div>
}
const Users =React.memo(UsersTabl)
const Counter =React.memo(CounterNum)

export const Example1 = () => {
    const [num, setNum] = useState<number>(10)
    const [users, setUsers] = useState<string[]>(["qqq", "www", "zzz"])
    return <>
        <button onClick={()=>{setNum(num+1)}}>+</button>
        <button onClick={()=>{setUsers([...users, "nnn"])}}>-</button>
       <Counter count={num}/>
       <Users users={users}/>
    </>
}

