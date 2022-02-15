import React, {KeyboardEvent, RefObject} from "react";
import {MassengType} from "../Dialogs";
import s from './Masseng.module.css'


type MassengTypeWithFunc = MassengType & {
    masseng: string
    onAddMasseng: () => void
    onChangeValueOn: (text: string) => void
}


const Masseng = (props: MassengTypeWithFunc) => {
    const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMasseng = () => {
        props.masseng && props.onAddMasseng()
    }

    const ChangeValueOn = () => {
        if (textAreaEl.current) {
            const text = textAreaEl.current.value
            props.onChangeValueOn(text)
        }
    }


    const enterPik = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.masseng && e.key === "Enter") {
            props.onAddMasseng()
        }
    }


    return <div className={s.item}>
        <div>{props.name}</div>
        <ul>
            {props.massengs.map(m => <li>{m.masseng}</li>)}
        </ul>
        <div className={s.text}>
                    <textarea onKeyPress={enterPik} onChange={ChangeValueOn} ref={textAreaEl}
                              value={props.masseng}></textarea>
            <button onClick={addMasseng}>OK</button>
        </div>
    </div>

}

export default Masseng