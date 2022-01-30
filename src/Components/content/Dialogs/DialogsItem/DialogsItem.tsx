import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogsItem.module.css'

type DialogItemType = {
    id: number
    name: string
}
export const DialogItem = (props: DialogItemType) =>{
    return <div><NavLink className={s.item} to ={"/dialogs/" + props.id }>{props.name}</NavLink></div>
}