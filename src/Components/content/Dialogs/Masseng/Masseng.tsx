import React, {KeyboardEvent, RefObject} from "react";
import {MassengType} from "../Dialogs";
import s from './Masseng.module.css'
import {ActionType} from "../../../../Types/Types";
import {addMassengActionCreator, upDateValueMassengActionCreator} from "../../../../Redux/profil-reducer";


type MassengTypeWithFunc = MassengType & {
    dispatсh: (action: ActionType) => void;
    masseng: string
}


const Masseng = (props: MassengTypeWithFunc) => {
    const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMasseng = () => {
        props.masseng && props.dispatсh(addMassengActionCreator())
    }

    const onChangeValueOn = () => {
        if (textAreaEl.current) {
            const text = textAreaEl.current.value
            props.dispatсh(upDateValueMassengActionCreator(text))
        }
    }


            const enterPik = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (props.masseng && e.key === "Enter") {
                    props.dispatсh(addMassengActionCreator())
                }
            }


            return <div className={s.item}>
                <div>{props.name}</div>
                <ul>
                    {props.massengs.map(m => <li>{m.masseng}</li>)}
                </ul>
                <div className={s.text}>
                    <textarea onKeyPress={enterPik} onChange={onChangeValueOn} ref={textAreaEl}
                              value={props.masseng}></textarea>
                    <button onClick={addMasseng}>OK</button>
                </div>
            </div>

        }

        export default Masseng