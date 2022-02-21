import {connect} from "react-redux";
import Сlients from "./Сlients";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {setClientsAC, subscribeClientAC, unSubscribeClientAC, СlientsPropsType} from "../../../Redux/сlients-reducer";

type mapStateToPropsType = {
    clients: СlientsPropsType[]
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        clients: state.сlientsPages.сlients

    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        unSubscribeClient: (id: number) => {
            dispatch(unSubscribeClientAC(id))
        },
        subscribeClient: (id: number) => {
            dispatch(subscribeClientAC(id))
        },
        setClients: (user: СlientsPropsType[]) => {
            dispatch(setClientsAC(user))
        }
    }
}

export const СlientsConteiner = connect(mapStateToProps, mapDispatchToProps)(Сlients);