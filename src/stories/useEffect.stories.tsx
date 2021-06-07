import React, {useEffect, useState} from "react";
import {stat} from "fs";

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
    }, [])
    useEffect(() => {
        console.log("first render and every fake change")
    }, [fake])

    return <>
        Hellow, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}
export const SetTimeout = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)


    useEffect(() => {
        console.log("every render")
      const timeout1= setTimeout(() => {
            console.log("set timeout")
        }, 1000)

        return ()=>{
            clearTimeout(timeout1)
        }
    }, [fake])


    return <>
        Hellow, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}
export const SetInterval = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)


    useEffect(() => {
        console.log("every render")
       const interval1=setInterval(() => {
            setCounter((state) => state + 1)
           console.log(counter)
        }, 1000)
        return ()=>{
            clearInterval(interval1)
        }
    }, [fake])


    return <>
        Counter: {counter}, fake: {fake}

    </>
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1)
    console.log("component render")
    useEffect(() => {
        console.log("effect occurred " + counter)

        return () => {
            console.log("finish, i will die now " + counter)
        }
    }, [counter])


    return <>
        Counter: {counter}
        <button onClick={() => {
            return setCounter(counter + 1)
        }}>+++
        </button>

    </>
}
export const KeysTrackerExample = () => {
    const [text, setTexr] = useState<string>('')

    console.log("component render" + text)

    useEffect(() => {
        const handler=(e:KeyboardEvent)=>{
            console.log(e.key)
            setTexr((state)=>state + e.key)
        };
        window.addEventListener('keypress', handler)


        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        text: {text}

    </>
}

