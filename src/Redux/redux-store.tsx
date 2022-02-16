import {combineReducers, createStore} from "redux";
import {profilReducer} from "./profil-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let reducers = combineReducers({
    profilPages: profilReducer,
    dialogsPages: dialogsReducer
})
let  store = createStore(reducers);

export type StoreType = typeof store

export default store