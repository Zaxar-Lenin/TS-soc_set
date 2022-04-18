import {Dispatch} from "redux";
import {authUserInProfile} from "./auth-reducer";
import {ThunkType} from "./redux-store";


const initialState =  {
    initialized: false,
}

type InitialStateType = typeof initialState

export type ActionAppType = SetDateMeActionType


export const appReducer = (state: InitialStateType = initialState, action: ActionAppType): InitialStateType => {
    switch (action.type) {
        case "SET-INC/APP":
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}


export const setInitializedAC = () => {
    return {
        type: "SET-INC/APP",
    } as const
}
type SetDateMeActionType = ReturnType<typeof setInitializedAC>

export const initializeApp = (): ThunkType => (dispatch) => {
   dispatch(authUserInProfile()).then(() => {
       dispatch(setInitializedAC())
   })
}