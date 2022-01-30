import React, { KeyboardEvent, RefObject } from "react";
import { NavLink } from "react-router-dom";
import { MassengType } from "../Dialogs";
import s from './Masseng.module.css'



type MassengTypeWithFunc = MassengType & {
    addMasseng: () => void
    updateValueMasseng: (text: string) => void
    masseng: string
}


const Masseng = (props: MassengTypeWithFunc) => {
    const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()

    const addText = () => {
        props.masseng && props.addMasseng()
    }

    const onChangeValueOn = () => {
        if (textAreaEl.current) {
            props.updateValueMasseng(textAreaEl.current?.value)
        }
    }


    const enterPik = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.masseng && e.key === "Enter") {
            props.addMasseng()
        }
    }



    return <div className={s.item}>
        <div>{props.name}</div>
        <ul>
            {props.massengs.map(m => <li>{m.masseng}</li>)}
        </ul>
        <div className={s.text}>
            <textarea onKeyPress={enterPik} onChange={onChangeValueOn} ref={textAreaEl} value={props.masseng} ></textarea>
            <button onClick={addText}>OK</button>
        </div>
    </div>

}

export default Masseng