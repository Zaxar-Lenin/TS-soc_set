import React from "react";
import {connect} from "react-redux";
import Dialogs, {DialogType, MassengType} from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {compose} from "redux";
import {addMasseng} from "../../../Redux/dialogs-reducer";
import {WithRiderect} from "../../../HOC/withRiderect";

type MapStateToPropsType = {
    DialogsData: Array<DialogType>
    MessangesData: Array<MassengType>
}
type MapDispatchToPropsType = {
    addMasseng: (text: string) => void,
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        DialogsData: state.dialogsPages.DialogsData,
        MessangesData: state.dialogsPages.MassengsData,
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





export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMasseng,
    }),
    WithRiderect)(Dialogs)