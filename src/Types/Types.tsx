import {addMasseng} from "../Redux/dialogs-reducer";
import {DialogType, MassengType} from "../Components/content/Dialogs/Dialogs";
import {addText, setStatusUser, setUserProfilAC, updeteIsUserAC} from "../Redux/profil-reducer";

export type ActionType =
    ReturnType<typeof addText>
    | ReturnType<typeof addMasseng>
    | ReturnType<typeof setUserProfilAC>
    | ReturnType<typeof updeteIsUserAC>
    | ReturnType<typeof setStatusUser>


export type StoreType = {
    _state: all
    _callSubscripe: () => void
    subscripe: (observer: () => void) => void
    getState: () => all
    dispatсh: (action: ActionType) => void
}


export type MyPostType = {
    id: number
    title: string
    coment: number
    like: number
}
export type MassengTextType = {
    id: number
    messange: string
}

export type ArrMyPostType = {
    MyPosts: Array<MyPostType>
    dispatсh: (action: ActionType) => void;
    messange: string
}

export type DialogsPagesType = {
    DialogsData: Array<DialogType>
    MassengsData: Array<MassengType>
    messange: string
}
export type ProfilPagesType = {
    MyPosts: Array<MyPostType>
    text: string
}
export type all = {
    dialogsPages: DialogsPagesType
    profilPages: ProfilPagesType
}

export type StateType = {
    state: all
    dispatсh: (action: ActionType) => void;
}