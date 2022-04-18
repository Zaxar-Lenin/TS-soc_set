import {ActionDialogsType, MyPostType} from "../Types/Types";
import {Dispatch} from "redux";
import {apiDal} from "../Dal/api";

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
        "small": string,
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
    isUser: false,
    status: "",
}

export type InitiolState = typeof initialState
export const profilReducer = (state = initialState, action: ActionDialogsType): InitiolState => {
    if (action.type === "ADD-USERS") {
        const newUser: MyPostType = {
            id: 12,
            title: action.text,
            coment: 2,
            like: 23
        }
        return {...state, MyPosts: [...state.MyPosts, newUser]}
    } else if (action.type === "SET-PROFIL-USER") {
        return {
            ...state,
            profilUser: {...action.user}
        }
    } else if (action.type === "UPDETE-IS-USER") {
        return {
            ...state,
            isUser: action.isUser
        }
    }else if (action.type === "SET-STATUS-USER"){
        return {
            ...state,
            status: action.status
        }
    }

    return state
}


export const addText = (text: string) => ({type: "ADD-USERS",text} as const)

export const setUserProfilAC = (user: ProfilUserType) => ({
    type: "SET-PROFIL-USER",
    user
} as const)

export const updeteIsUserAC = (isUser: boolean) => ({
    type: "UPDETE-IS-USER",
    isUser
} as const)
export const setStatusUser = (status: string) => ({
    type: "SET-STATUS-USER",
    status
} as const)






export const getUser = (idUser: string) => (dispatch: Dispatch) => {
    apiDal.currentUser(idUser).then(data => {
        dispatch(setUserProfilAC(data))
        dispatch(updeteIsUserAC(true))
    })
}

export const getUserStatus = (id: string) => (dispatch: Dispatch) => {
    apiDal.getProfilStatus(id).then(response => {
        dispatch(setStatusUser(response.data))
    })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    apiDal.updateProfilStatus(status).then(response => {
        dispatch(setStatusUser(response.data))
    })
}
