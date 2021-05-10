import React, {useCallback, useMemo, useState} from "react";

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
            while ( x< 100){
                x++
            }
            tempA = tempA * i
        }
        return tempA;
    } , [a])

    for ( let i=1;i<=b; i++ ){
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
    const [num, setNum] = useState<number>(10)
    const [users, setUsers] = useState<string[]>(["qqq", "www", "zzz"])
    const filterUsers=useMemo (()=>users.filter((u)=>u.indexOf("z")), [users])

    return <>
        <button onClick={()=>{setNum(num+1)}}>+</button>
        <button onClick={()=>{setUsers([...users, "nnn"])}}>-</button>
        {num}
        <Users users={filterUsers}/>
    </>
}

export const LikeUseCollback = () => {
    const [num, setNum] = useState<number>(10)
    const [book, setBooks] = useState<string[]>(["React", "JS", "TSX"])
    const addBook=()=>{setBooks([...book, "CSS"])}

    const MemoCollback=useMemo(()=> {
        return ()=>{setBooks([...book, "CSS"])}
    }, [book])
    const MemoCollback2=useCallback(()=> {
        {setBooks([...book, "CSS"])}
    }, [book])


    return <>
        <button onClick={()=>{setNum(num+1)}}>+</button>
        {num}
        <Books  addBook={MemoCollback2}/>
    </>
}

const BookSecret =(props: {  addBook: ()=>void})=>{
    console.log("USERS")
    return <div>
        {/*{props.books.map((b, i)=>{return<div key={i}>{b}</div>})}*/}
        <button onClick={props.addBook}>-</button>
    </div>
}
const Books=React.memo(BookSecret)

