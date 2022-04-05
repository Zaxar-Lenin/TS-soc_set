import {ActionType, MassengTextType} from "../Types/Types";
import {DialogType, MassengType} from "../Components/content/Dialogs/Dialogs";

const initialState:{DialogsData: DialogType[],MassengsData:MassengType[]} = {
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
            id: 1, name: "Viki:", messanges: [
                {
                    id: 1,
                    messange: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"
                },
                {
                    id: 2,
                    messange: "This page provides various texts in English for reading.Texts are useful for both schoolchildren and students. Recommended for beginners and those with limited vocabulary"
                }
            ]
        }


    ],
}
export const dialogsReducer = (state = initialState, action: ActionType):{DialogsData: DialogType[],MassengsData:MassengType[]} => {
    if (action.type === "ADD-MASSENG") {
        const newMasseng: MassengTextType = {
            id: 3,
            messange: action.text
        }
        return {...state,MassengsData: state.MassengsData.map(m => ({...m,messanges: [...m.messanges,newMasseng]}))}
    }else {
        return state
    }
}

export const addMasseng = (text: string) => ({type: "ADD-MASSENG",text} as const)
