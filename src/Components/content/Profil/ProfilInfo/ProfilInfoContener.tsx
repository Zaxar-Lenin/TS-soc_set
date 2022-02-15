import React from 'react';
import {ActionType} from "../../../../Types/Types";
import {addTextActionCreator, upDateValueTextActionCreator} from "../../../../Redux/dialogs-reducer";
import ProfilInfo from "./ProfilInfo";

type ProfilInfoType = {
    dispatсh: (action: ActionType) => void
    masseng: string
}

const ProfilInfoContener = (props: ProfilInfoType) => {


    const onAddText = () => {
        props.dispatсh(addTextActionCreator())

    }

    const onChangeUpdateValue = (text: string) => {
            props.dispatсh(upDateValueTextActionCreator(text))
    }

    return <ProfilInfo masseng={props.masseng} onAddText = {onAddText} onChangeUpdateValue = {onChangeUpdateValue}/>
}

export default ProfilInfoContener;