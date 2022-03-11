import React from "react";
import {connect} from "react-redux";
import Dialogs, {DialogType, MassengType} from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addMasseng, upDateValueMasseng} from "../../../Redux/dialogs-reducer";
import {MyPostType} from "../../../Types/Types";

type MapStateToPropsType = {
    DialogsData: Array<DialogType>
    MessangesData: Array<MassengType>
    messangeChange: string
}
type MapDispatchToPropsType = {
    addMasseng: () => void,
    upDateValueMasseng: (text: string) => void,
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        DialogsData: state.dialogsPages.DialogsData,
        MessangesData: state.dialogsPages.MassengsData,
        messangeChange: state.dialogsPages.messangeChange
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         addMasseng: () => {
//             dispatch(addMassengActionCreator())
//         },
//         upDateValueMasseng: (text: string) => {
//             dispatch(upDateValueMassengActionCreator(text))
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {
    addMasseng,
    upDateValueMasseng,
})(Dialogs)


export default DialogsContainer