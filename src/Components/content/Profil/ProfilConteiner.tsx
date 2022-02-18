import {connect} from "react-redux";
import Profil from "./Profil";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {addTextActionCreator, upDateValueTextActionCreator} from "../../../Redux/dialogs-reducer";
import { MyPostType } from "../../../Types/Types";

type MapStateToPropsType = {
        MyPosts: Array<MyPostType>
        messange: string 
}

const MapStateToProps = (state:StateType): MapStateToPropsType => ({
        MyPosts: state.profilPages.MyPosts,
        messange: state.profilPages.text
})
const MapDispatchToProps = (dispatch: Dispatch) => ({
    onAddText: () => {
            dispatch(addTextActionCreator())
         },
    onChangeUpdateValue: (text: string) => {
             dispatch(upDateValueTextActionCreator(text))
        }

})

export const ProfilConteiner = connect(MapStateToProps,MapDispatchToProps)(Profil)

