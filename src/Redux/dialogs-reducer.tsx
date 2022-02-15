import {DialogsPagesType, MassengTextType} from "../Types/Types";
import {ActionType} from "../Types/Types";

const initialState = {
    DialogsData: [
        {id: 1, name: "Viki"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Pasha"},
        {id: 4, name: "Maik"},
        {id: 5, name: "Mikal"},
        {id: 6, name: "Maik"},
        {id: 7, name: "Sergey"},
        {id: 8, name: "Seva"},
        {id: 9, name: "Pasha"},
        {id: 10, name: "Mikal"},
        {id: 11, name: "Sergey"}

    ],
    MassengsData: [
        {
            id: 1, name: "Viki:", massengs: [
                {
                    id: 1,
                    masseng: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"
                },
                {
                    id: 2,
                    masseng: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"
                }
            ]
        },

    ],
    masseng: ""
}
export const dialogsReducer = (state = initialState, action: ActionType) => {
    if (action.type === "ADD-MASSENG") {
        const newMasseng: MassengTextType = {
            id: 3,
            masseng: state.masseng
        }
        state.MassengsData[0].massengs.push(newMasseng)
        state.masseng = ""
    } else if (action.type === "UP-DATE-VALUE-MASSENG") {
        state.masseng = action.text
    }
    return state
}

export const addTextActionCreator = () => ({type: "ADD-USERS"} as const)
export const upDateValueTextActionCreator = (text: string) => ({
    type: "UP-DATE-VALUE-TEXT",
    text: text
} as const)