import React from "react";
import { MassengTextType } from "../../../App";
import { ActionType } from "../../../Redux/state";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogsItem/DialogsItem";
import Masseng from "./Masseng/Masseng";

export type DialogType = {
    id: number
    name: string
}


export type MassengType = {
    id: number
    name: string
    massengs: Array<MassengTextType>
}

type DialogsArrType = {
    DialogsData: Array<DialogType>
    MassengsData: Array<MassengType>
    dispatсh: (action: ActionType) => void;
    masseng: string
}

const Dialogs = (props: DialogsArrType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogsData.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={s.massenges}>
                {props.MassengsData.map(m => <Masseng
                    dispatсh={props.dispatсh}
                    masseng = {props.masseng}
                    id={m.id}
                    massengs={m.massengs}
                    name={m.name} />)}
            </div>
        </div>
    )
}



export default Dialogs;