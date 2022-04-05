import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilReducer} from "./profil-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {clientsReducer} from "./сlients-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilPages: profilReducer,
    dialogsPages: dialogsReducer,
    clientsPages: clientsReducer,
    authMe: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunk));

export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>;

export default store