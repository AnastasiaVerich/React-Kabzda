import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffectDemo'
};

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)



    useEffect(() => {
        console.log("every render")
    })
    useEffect(() => {
        console.log("only first render")
    },[])
    useEffect(() => {
        console.log("first render and every fake change")
    },[fake])

    return <>
        Hellow, {counter} {fake}
        <button onClick={() => setCounter(counter+1)}>counter +</button>
        <button onClick={() => setFake(fake+1)}>fake+</button>

    </>
}
export const SetTimeout = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)



     useEffect(() => {
       console.log("every render")
         setTimeout(()=>{
             console.log("set timeout")
         }, 1000)
   }, [fake])




    return <>
        Hellow, {counter} {fake}
        <button onClick={() => setCounter(counter+1)}>counter +</button>
        <button onClick={() => setFake(fake+1)}>fake+</button>

    </>
}
export const SetInterval = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)


    useEffect(() => {
       console.log("every render")
         setInterval(()=>{
            setCounter((state)=>state+1)
         }, 1000)
   }, [fake])



    return <>
        Counter: {counter}, fake: {fake}

    </>
}
/*
export const GetTime = () => {
    var a= new Date()



    const [hour, setHour] = useState<number>(a.getHours()) //a.getHours()
    const [min, setMin] = useState<number>(a.getMinutes()) //a.getMinutes()
    const [sec, setSec] = useState<number>(a.getSeconds())// a.getSeconds()



    useEffect(() => {
        setInterval(()=>{
            setSec((state)=>state!=59?state+1:0)

        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(()=>{
            setMin((state)=>state!=59?state+1:0)
        },60000- sec*1000)
    }, [])

    useEffect(() => {
        setTimeout(()=>{
            setHour((state)=>state!=23?state+1:0)
        },3600000- min*60*1000-sec*1000)
    }, [])

    return <>
        {hour}:{min}:{sec}

    </>
}
*/
