import React from "react";
import {MassengType} from "../Dialogs";
import s from './Messange.module.css'
import {DialogForm} from "./DialogForm/DialogForm";


type MassengTypeWithFunc = MassengType & {
    addMasseng: (text: string) => void,
}

export type DialogFormType ={
    myMessage: string
}


const Messange = (props: MassengTypeWithFunc) => {

    const onSubmit = (formDialog: DialogFormType) => {
        props.addMasseng(formDialog.myMessage)

    }

    return <div className={s.item}>
        <div>{props.name}</div>
        <ul>
            {props.messanges.map(m => <li key={m.id}>{m.messange}</li>)}
        </ul>
        <div className={s.text}>
            <DialogForm onSubmit = {onSubmit}/>
            {/*        <textarea onKeyPress={enterPik} onChange={ChangeValueOn} ref={textAreaEl}*/}
            {/*                  value={props.messangeChange}></textarea>*/}
            {/*<button onClick={addMasseng}>OK</button>*/}
        </div>
    </div>

}

export default Messange;