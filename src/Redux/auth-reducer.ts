import {Dispatch} from "redux";
import {apiDal} from "../Dal/api";
import {FormDataType} from "../Components/content/Login/Login";

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

type ActionType = SetDateMeActionType


export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
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
    apiDal.authUser().then(data => {
        let {id, login, email} = data.data
        if (data.resultCode === 0) {
            dispatch(setDateMeAC(id, login, email, true))
        }
    })
}
export const authLogInUserInProfile = (formDate: FormDataType) => (dispatch: Dispatch) => {
    apiDal.postLoginUser(formDate)
        .then(response => {
            if (response.data.resultCode === 0){
                // @ts-ignore
                dispatch(authUserInProfile())
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
