import React, {useState} from "react";

export default {
    title: 'UseStateDemo'
};

export const Example1 = () => {
    ///вместо значения засовываем функцию, которая ыозвращает значение.
    /// используется, если вычесоение инициализонного значения тяжелое
    const [counter, setCounter] = useState<number>(()=> {console.log("jj"); return(0)})
const  changer=(state: number): number=> {
  return   state + 1
};

    return <>
        <button onClick={()=>setCounter(changer)
        }>+</button>
        {counter}
    </>
}
