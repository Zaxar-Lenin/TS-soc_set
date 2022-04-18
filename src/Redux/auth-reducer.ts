import {Dispatch} from "redux";
import {apiDal} from "../Dal/api";
import {FormDataType} from "../Components/content/Login/Login";
import {stopSubmit} from "redux-form";
import {ThunkType} from "./redux-store";

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}
export type AuthType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
}

export type ActionAuthType = SetDateMeActionType


export const authReducer = (state: AuthType = initialState, action: ActionAuthType): AuthType => {
    switch (action.type) {
        case "SET-DATE-ME":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state

    }
}


export const setDateMeAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET-DATE-ME",
        payload: {
            id,
            login,
            email,
            isAuth,
        },
    } as const
}
type SetDateMeActionType = ReturnType<typeof setDateMeAC>

export const authUserInProfile = () => (dispatch: Dispatch) => {
    return apiDal.authUser().then(data => {
        let {id, login, email} = data.data
        if (data.resultCode === 0) {
            dispatch(setDateMeAC(id, login, email, true))
        }
    })
}
export const authLogInUserInProfile = (formDate: FormDataType): ThunkType => (dispatch) => {
    apiDal.postLoginUser(formDate)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(authUserInProfile())
            }else{
                let error = response.data.messages.length ? response.data.messages[0] : "Errror"
                dispatch(stopSubmit("login", {_error: error}))
            }
        })
}
export const authLogOutUserInProfile = () => (dispatch: Dispatch) => {
    apiDal.deleteLogOutUser()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setDateMeAC(null,null,null, false))
            }
        })
}
