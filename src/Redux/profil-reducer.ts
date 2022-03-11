import {MyPostType, ProfilPagesType} from "../Types/Types";
import {ActionType} from "./../Types/Types";
import MyPost from "../Components/content/Profil/MyPost/MyPost";

export type ProfilUserType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small":string,
        "large": string,
    },
}


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
    ] as MyPostType[],
    profilUser: {} as ProfilUserType,
    text: "",
    isUser: false
}

export type InitiolState = typeof initialState
export const profilReducer = (state  = initialState, action: ActionType):InitiolState => {
    if (action.type === "ADD-USERS") {
        const newUser: MyPostType = {
            id: 12,
            title: state.text,
            coment: 2,
            like: 23
        }
        return {...state, MyPosts: [...state.MyPosts,newUser], text: ""}
    } else if (action.type === "UP-DATE-VALUE-TEXT") {
       return {
            ...state, text: action.text
        }
    }else if (action.type === "SET-PROFIL-USER"){
        return {
            ...state,
            profilUser: {...action.user}
        }
    }else if(action.type === "UPDETE-IS-USER"){
        return {
            ...state,
            isUser: action.isUser
        }
    }

    return state
}



export const addTextAC = () => ({type: "ADD-USERS"} as const)
export const upDateValueTextAC = (text: string) => ({
    type: "UP-DATE-VALUE-TEXT",
    text: text
} as const)
export const setUserProfilAC = (user: ProfilUserType) => ({
    type: "SET-PROFIL-USER",
    user
} as const)

export const updeteIsUserAC = (isUser: boolean) => ({
    type: "UPDETE-IS-USER",
    isUser
} as const)