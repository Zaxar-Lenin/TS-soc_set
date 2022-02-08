import {addTextActionCreator, upDateValueTextActionCreator} from "../Redux/dialogs-reducer";
import {addMassengActionCreator, upDateValueMassengActionCreator} from "../Redux/profil-reducer";
import {DialogType, MassengType} from "../Components/content/Dialogs/Dialogs";

export type ActionType =
    ReturnType<typeof addTextActionCreator>
    | ReturnType<typeof upDateValueTextActionCreator>
    | ReturnType<typeof addMassengActionCreator>
    | ReturnType<typeof upDateValueMassengActionCreator>


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
    masseng: string
}

export type ArrMyPostType = {
    MyPosts: Array<MyPostType>
    dispatсh: (action: ActionType) => void;
    masseng: string
}

export type DialogsPagesType = {
    DialogsData: Array<DialogType>
    MassengsData: Array<MassengType>
    masseng: string
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