import React, {KeyboardEvent, useEffect, useState} from "react";
import style from "./Select.module.css"

type itemType = {
    title: string
    value: any
}
export type SelectType = {
    value?: any,
    onChange: (v: any) => void,
    items: itemType[]
}

export function Select(props: SelectType) {
    const selected = props.items.find((el: itemType) => el.value === props.value)

    const [active, setActive] = useState(false)
    const [now, setNow] = useState(props.value)
    const nowItem = props.items.find((el: itemType) => el.value === now)
    const showItems = () => setActive(!active)

    useEffect(() => {
        setNow(props.value)
    }, [props.value])


    const OnKeyUp=(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === now) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            } if(!selected) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={style.select} onKeyUp={OnKeyUp} tabIndex={0}>
                <span className={style.main} onClick={showItems}>{selected && selected.title}</span>
                {
                    active &&
                    <div className={style.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => {
                                    setNow(i.value)
                                }}
                                className={style.item + " " + (nowItem === i ? style.selected : "")}
                                key={i.value}
                                onClick={() => {
                                    {
                                        props.onChange(i.value);
                                        showItems()
                                    }
                                }
                                }>
                                {i.title}
                            </div>
                        )
                        }
                    </div>
                }
            </div>
        </>
    )
}

