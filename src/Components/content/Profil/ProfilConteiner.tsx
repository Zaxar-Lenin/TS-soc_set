import {connect} from "react-redux";
import Profil from "./Profil";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {addTextActionCreator, upDateValueTextActionCreator} from "../../../Redux/dialogs-reducer";
import { MyPostType } from "../../../Types/Types";

type MapStateToPropsType = {
        myPosts: Array<MyPostType>
        messange: string
}

const MapStateToProps = (state:StateType): MapStateToPropsType => {
    return {
        myPosts: state.profilPages.MyPosts,
        messange: state.profilPages.text
    }
}
const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddText: () => {
            dispatch(addTextActionCreator())
        },
        onChangeUpdateValue: (text: string) => {
            dispatch(upDateValueTextActionCreator(text))
        }

    }
}

export const ProfilConteiner = connect(MapStateToProps,MapDispatchToProps)(Profil)

