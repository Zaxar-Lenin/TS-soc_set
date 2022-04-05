import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MassengTextType} from "../../../Types/Types";
import Messange from "./Messange/Messange";

export type DialogType = {
    id: number
    name: string
}


export type MassengType = {
    id: number
    name: string
    messanges: Array<MassengTextType>
}

type DialogsArrType = {
    DialogsData: Array<DialogType>
    MessangesData: Array<MassengType>
    addMasseng: (text: string) => void,
}

const Dialogs = (props: DialogsArrType) => {

    const mapMssengsData = props.MessangesData.map(m => <Messange
        key = {m.id}
        addMasseng = {props.addMasseng}
        id={m.id}
        messanges={m.messanges}
        name={m.name}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {mapMssengsData}
            </div>
        </div>
    )
}


export default Dialogs;