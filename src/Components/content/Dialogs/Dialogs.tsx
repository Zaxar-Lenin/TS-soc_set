import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MassengTextType} from "../../../Types/Types";
import MassengContener from "./Masseng/MassengContener";

export type DialogType = {
    id: number
    name: string
}


export type MassengType = {
    id: number
    name: string
    massengs: Array<MassengTextType>
}

// type DialogsArrType = {
//     DialogsData: Array<DialogType>
//     MassengsData: Array<MassengType>
//     dispatсh: (action: ActionType) => void;
//     masseng: string
// }

type DialogsArrType = {
     DialogsData: Array<DialogType>
     MassengsData: Array<MassengType>
 }

const Dialogs = (props: DialogsArrType) => {

    const mapMssengsData = props.MassengsData.map(m => <MassengContener
        id={m.id}
        massengs={m.massengs}
        name={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={s.massenges}>
                {mapMssengsData}
            </div>
        </div>
    )
}


export default Dialogs;