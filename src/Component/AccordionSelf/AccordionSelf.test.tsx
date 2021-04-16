import {reduce, StateType} from "./Reducer";


test('testic test', ()=>{
const state: StateType={
    on: false
}

const newState =reduce(state, {type: "KkK"})
    expect(newState.on).toBe(true)

})

test('testic error', ()=>{
    const state: StateType={
        on: false
    }

    expect(()=>{reduce(state, {type: "KK"})}).toThrowError();

})