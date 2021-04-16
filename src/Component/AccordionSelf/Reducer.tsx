

export type AccordionProps = {
    text: string
    //collaps: boolean // вместо него useState
}
type ActionType = {
    type: string
}

export type StateType={
    on: boolean
}
export const reduce = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "KKK":
            return {...state,
            on: !state.on}
        case "KK":
            throw new Error("fuuuuuuck");
        default:
            return state
    }
}