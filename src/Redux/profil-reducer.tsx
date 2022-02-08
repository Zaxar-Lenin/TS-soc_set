import {MyPostType, ProfilPagesType} from "../Types/Types";
import {ActionType} from "./../Types/Types";

export const ProfilReducer = (state: ProfilPagesType, action: ActionType) => {
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