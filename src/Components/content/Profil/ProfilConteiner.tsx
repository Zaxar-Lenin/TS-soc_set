import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {MyPostType} from "../../../Types/Types";
import React from "react";
import {addText, getUser, getUserStatus, ProfilUserType, updateUserStatus} from "../../../Redux/profil-reducer";
import Profil from "./Profil";
import {WithRiderect} from "../../../HOC/withRiderect";
import {compose} from "redux";


export type MapStateToPropsType = {
    myPosts: Array<MyPostType>
    profilUser: ProfilUserType
    isUser: boolean
    status: string
}
// export type MapDispatchToPropsType = {
//     addText: () => void
//     getUser: (idUser: string) => void
// }

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        myPosts: state.profilPages.MyPosts,
        profilUser: state.profilPages.profilUser,
        isUser: state.profilPages.isUser,
        status: state.profilPages.status,
    }
}


export const ProfilConteiner = compose<React.ComponentType>(
    WithRiderect,
    connect(mapStateToProps, {
        getUser,
        addText,
        updateUserStatus,
        getUserStatus,
    }))(Profil)


