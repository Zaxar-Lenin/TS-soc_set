import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {ActionType, MyPostType} from "../../../Types/Types";
import React, {Dispatch} from "react";
import {
    addTextAC,
    ProfilUserType,
    setUserProfilAC,
    upDateValueTextAC,
    updeteIsUserAC
} from "../../../Redux/profil-reducer";
import {ProfilApi} from "./ProfilApi/ProfilApi";


export type MapStateToPropsType = {
        myPosts: Array<MyPostType>
        messange: string
        profilUser: ProfilUserType
        isUser: boolean
}
export type MapDispatchToPropsType = {
    addText: () => void
    upDateValueText: (text: string) => void
    setUserProfil: (user: ProfilUserType) => void
    updeteIsUser: (isUser: boolean) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        myPosts: state.profilPages.MyPosts,
        messange: state.profilPages.text,
        profilUser: state.profilPages.profilUser,
        isUser: state.profilPages.isUser
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>):MapDispatchToPropsType => {
    return {
        addText: () => {
            dispatch(addTextAC())
        },
        upDateValueText: (text: string) => {
            dispatch(upDateValueTextAC(text))
        },
        setUserProfil: (user: ProfilUserType) =>{
            dispatch(setUserProfilAC(user))
        },
        updeteIsUser: (isUser: boolean) =>{
            dispatch(updeteIsUserAC(isUser))
        },
    }
}

export const ProfilConteiner = connect(mapStateToProps,mapDispatchToProps)(ProfilApi)

// export type TProps = ConnectedProps<typeof ProfilConteiner>;

