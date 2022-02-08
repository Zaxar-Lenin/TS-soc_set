import {DialogsPagesType, MassengTextType} from "../Types/Types";
import {ActionType} from "../Types/Types";

export const DialogsReducer = (state: DialogsPagesType, action: ActionType) => {
    if(action.type === "ADD-MASSENG") {
        const newMasseng: MassengTextType = {
            id: 3,
            masseng: state.masseng
        }
        state.MassengsData[0].massengs.push(newMasseng)
       state.masseng = ""
    }else if(action.type === "UP-DATE-VALUE-MASSENG"){
            state.masseng = action.text
    }
    return state
}

export const addTextActionCreator = () => ({type: "ADD-USERS"} as const)
export const upDateValueTextActionCreator = (text: string) => ({
    type: "UP-DATE-VALUE-TEXT",
    text: text
} as const )