import {combineReducers, createStore} from "redux";
import {profilReducer} from "./profil-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import { сlientsReducer } from "./сlients-reducer";



let reducers = combineReducers({
    profilPages: profilReducer,
    dialogsPages: dialogsReducer,
    сlientsPages: сlientsReducer
})
let store = createStore(reducers);

export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>;

export default store