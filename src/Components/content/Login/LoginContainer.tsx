import {connect} from "react-redux";
import {authLogInUserInProfile} from "../../../Redux/auth-reducer";
import {Login} from "./Login";
import {StateType} from "../../../Redux/redux-store";



const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.authMe.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps,{authLogInUserInProfile})(Login)