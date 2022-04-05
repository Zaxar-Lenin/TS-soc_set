import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
    ClientsPropsType,
    setClientsTC,
    setPageUsers,
    subscribeClient,
    unSubscribeClient
} from "../../../Redux/сlients-reducer";
import ClientsApi from "./СlientsApi";


type mapStateToPropsType = {
    clients: ClientsPropsType[]
    totalCount: number
    countClientsOnLine: number
    page: number
    isFollowed: boolean
    expectationArr: number[]
}
type mapDispatchToPropsType = {
    subscribeClient: (id: number) => void
    unSubscribeClient: (id: number) => void
    setClientsTC: (page: number,countClientsOnLine: number) => void
    setPageUsers: (page: number,countClientsOnLine: number) => void

}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        clients: state.clientsPages.clients,
        totalCount: state.clientsPages.totalCount,
        countClientsOnLine: state.clientsPages.countClientsOnLine,
        page: state.clientsPages.page,
        isFollowed: state.clientsPages.isFollowed,
        expectationArr: state.clientsPages.expectationArr,


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
    setClientsTC,
    setPageUsers,
})(ClientsApi);


