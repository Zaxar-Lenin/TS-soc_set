import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilReducer} from "./profil-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionClientsType, clientsReducer} from "./сlients-reducer";
import {ActionAuthType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {ActionAppType, appReducer} from "./app-ruducer";
import {ActionDialogsType} from "../Types/Types";


let reducers = combineReducers({
    profilPages: profilReducer,
    dialogsPages: dialogsReducer,
    clientsPages: clientsReducer,
    authMe: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunk));


export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>;
type ActionType = ActionClientsType | ActionDialogsType | ActionAuthType | ActionAppType

export type ThunkType<D = void> =  ThunkAction<D,StateType,unknown,ActionType>

export default store