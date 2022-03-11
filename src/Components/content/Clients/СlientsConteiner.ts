import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
    setClients,
    setTotatCount,
    subscribeClient,
    unSubscribeClient,
    updetePage,
    updetePreload,
    ClientsPropsType
} from "../../../Redux/сlients-reducer";
import ClientsApi from "./СlientsApi";


type mapStateToPropsType = {
    clients: ClientsPropsType[]
    totalCount: number
    countClientsOnLine: number
    page: number
    isFollowed: boolean
}
type mapDispatchToPropsType = {
    subscribeClient: (id: number) => void
    unSubscribeClient: (id: number) => void
    setClients: (users: ClientsPropsType[]) => void
    updetePage: (m: number) => void
    setTotatCount: (count: number) => void
    updetePreload: (isFollowed: boolean) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        clients: state.clientsPages.clients,
        totalCount: state.clientsPages.totalCount,
        countClientsOnLine: state.clientsPages.countClientsOnLine,
        page: state.clientsPages.page,
        isFollowed: state.clientsPages.isFollowed,



    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         unSubscribeClient: (id: number) => {
//             dispatch(unSubscribeClientAC(id))
//         },
//         subscribeClient: (id: number) => {
//             dispatch(subscribeClientAC(id))
//         },
//         setClients: (user: СlientsPropsType[]) => {
//             dispatch(setClientsAC(user))
//         },
//         updetePage: (m: number) => {
//             dispatch(updetePageAC(m))
//         },
//         setTotatCount: (count: number) => {
//             dispatch(setTotalCountAC(count))
//         },
//         updetePreload: (isFollowed: boolean) => {
//             dispatch(updetePreloadAC(isFollowed))
//         },
//     }
// }

export const СlientsConteiner = connect<mapStateToPropsType, mapDispatchToPropsType, {}, any>(mapStateToProps, {
    subscribeClient,
    unSubscribeClient,
    setClients,
    updetePage,
    setTotatCount,
    updetePreload,
})(ClientsApi);


