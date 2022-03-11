import React, {KeyboardEvent, RefObject} from "react";
import {MassengType} from "../Dialogs";
import s from './Messange.module.css'


type MassengTypeWithFunc = MassengType & {
    messangeChange: string,
    addMasseng: () => void,
    upDateValueMasseng: (text: string) => void,
}


const Messange = (props: MassengTypeWithFunc) => {
    const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMasseng = () => {
        props.messangeChange && props.addMasseng()
    }

    const ChangeValueOn = () => {
        if (textAreaEl.current) {
            const text = textAreaEl.current.value
            props.upDateValueMasseng(text)
        }
    }


    const enterPik = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.messangeChange && e.key === "Enter") {
            props.addMasseng()
        }
    }


    return <div className={s.item}>
        <div>{props.name}</div>
        <ul>
            {props.messanges.map(m => <li key={m.id}>{m.messange}</li>)}
        </ul>
        <div className={s.text}>
                    <textarea onKeyPress={enterPik} onChange={ChangeValueOn} ref={textAreaEl}
                              value={props.messangeChange}></textarea>
            <button onClick={addMasseng}>OK</button>
        </div>
    </div>

}

export default Messange;