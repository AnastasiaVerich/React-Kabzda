import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
};


export const DifficultCount = () => {
    const [a, setA] = useState<number>(10)
    const [b, setB] = useState<number>(10)


    let resB=1

   let resA=useMemo(()=> {
        let tempA=1
        for (let i = 1; i <= a; i++) {
            let x=0
            while ( x< 1000000000){
                x++
            }
            tempA = tempA * i
        }
        return tempA;
    } , [a])

    for ( let i=1;i<=b; i++ ){
        let x=0

        resB=resB*i
    }
    return <div>
        <input value={a} onChange={(e)=> setA(+e.currentTarget.value)} />
        <input value={b} onChange={(e)=> setB(Number(e.currentTarget.value))} />
        <hr/>
        <div> Res for a: {resA}</div>
        <div> Res for b: {resB}</div>

    </div>
}


const UsersTabl =(props: { users:string[] })=>{
    console.log("USERS")
    return <div>{props.users.map((u, i)=>{return<div key={i}>{u}</div>})}</div>
}
const Users =React.memo(UsersTabl)

export const HalpsToReactMemo = () => {
    console.log("111111")
    const [num, setNum] = useState<number>(10)
    const [users, setUsers] = useState<string[]>(["qqq", "www", "zzz"])
    const filterUsers=useMemo (()=>users.filter((u)=>u.indexOf("w")), [users])

    return <>
        <button onClick={()=>{setNum(num+1)}}>+</button>
        <button onClick={()=>{setUsers([...users, "nnn"])}}>-</button>
        {num}
        <Users users={filterUsers}/>
    </>
}

