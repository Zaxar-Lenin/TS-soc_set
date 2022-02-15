import {MyPostType, ProfilPagesType} from "../Types/Types";
import {ActionType} from "./../Types/Types";

const initialState = {
    MyPosts: [
        {id: 1, title: "ByBeldrus", coment: 545, like: 23},
        {id: 2, title: "ByBeldrus", coment: 484, like: 23},
        {id: 3, title: "ByBeldrus", coment: 54, like: 23},
        {id: 4, title: "ByBeldrus", coment: 54, like: 23},
        {id: 5, title: "ByBeldrus", coment: 788, like: 23},
        {id: 6, title: "ByBeldrus", coment: 519, like: 23},
        {id: 7, title: "ByBeldrus", coment: 95, like: 23},
        {id: 8, title: "ByBeldrus", coment: 39, like: 23},
        {id: 9, title: "ByBeldrus", coment: 158, like: 23},
        {id: 10, title: "ByBeldrus", coment: 962, like: 23},
        {id: 11, title: "ByBeldrus", coment: 2, like: 23}
    ],
    text: ""
}
export const profilReducer = (state = initialState, action: ActionType) => {
    if (action.type === "ADD-USERS") {
        const newUser: MyPostType = {
            id: 12,
            title: state.text,
            coment: 2,
            like: 23
        }
        state.MyPosts.push(newUser)
        state.text = ""
    } else if (action.type === "UP-DATE-VALUE-TEXT") {
        state.text = action.text
    }

    return state
}


export const addMassengActionCreator = () => ({type: "ADD-MASSENG"} as const)
export const upDateValueMassengActionCreator = (text: string) => ({
    type: "UP-DATE-VALUE-MASSENG",
    text: text
} as const)