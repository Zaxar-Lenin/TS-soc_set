import React, {RefObject} from "react";
import {MassengType} from "../Dialogs";
import {ActionType} from "../../../../Types/Types";
import {addMassengActionCreator, upDateValueMassengActionCreator} from "../../../../Redux/profil-reducer";
import Masseng from "./Masseng";


type MassengTypeWithFunc = MassengType & {
    dispatсh: (action: ActionType) => void;
    masseng: string
}


const MassengContener = (props: MassengTypeWithFunc) => {
    const textAreaEl: RefObject<HTMLTextAreaElement> = React.createRef()

    const onAddMasseng = () => {
        props.dispatсh(addMassengActionCreator())
    }

    const onChangeValueOn = (text: string) => {
        props.dispatсh(upDateValueMassengActionCreator(text))
    }
    return <Masseng id={props.id}
                    massengs={props.massengs}
                    name={props.name}
                    masseng={props.masseng}
                    onAddMasseng={onAddMasseng}
                    onChangeValueOn={onChangeValueOn}/>

}

export default MassengContener