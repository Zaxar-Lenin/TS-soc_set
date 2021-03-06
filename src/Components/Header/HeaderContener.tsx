import React from 'react';
import {connect} from "react-redux";
import HeaderApi from './HeaderApi';
import {StateType} from "../../Redux/redux-store";
import {authLogOutUserInProfile, AuthType} from "../../Redux/auth-reducer";

export type AuthPropsType = {
    id: number,
    login: string,
    email: string,
    isAuth: boolean,
}

type mapStateToPropsType = {
    authDate: AuthType
}
type mapDispatchToPropsType = {
    authLogOutUserInProfile: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return{
        authDate: state.authMe
    }
}
export const HeaderContener = connect(mapStateToProps,{
    authLogOutUserInProfile,
})(HeaderApi)
