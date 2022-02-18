import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addMassengActionCreator, upDateValueMassengActionCreator} from "../../../Redux/profil-reducer";


const mapStateToProps = (state: StateType) => {
    return {
        DialogsData: state.dialogsPages.DialogsData,
        MessangesData: state.dialogsPages.MassengsData,
        messangeChange: state.dialogsPages.messangeChange
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddMasseng: () => {
            dispatch(addMassengActionCreator())
        },
        onChangeValueOn: (text: string) => {
            dispatch(upDateValueMassengActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer