import React from 'react';
import {ClientsPropsType} from "../../../Redux/сlients-reducer";
import axios from "axios";
import {Clients} from "./Сlients";
import preloader from "../../../Preloader/Eclipse-1s-200px.svg"
import Preloader from "../../Common/Preloader";
import {ProfilUserType} from "../../../Redux/profil-reducer";


type СlientsNowTypeApi = {
    unSubscribeClient: (id: number) => void
    subscribeClient: (id: number) => void
    clients: ClientsPropsType[]
    setClients: (user: ClientsPropsType[]) => void
    totalCount: number
    countClientsOnLine: number
    page: number
    updetePage: (m: number) => void
    setTotatCount: (count: number) => void
    isFollowed: boolean
    updetePreload: (isFollowed: boolean) => void

}


class ClientsApi extends React.Component<СlientsNowTypeApi, any> {
    componentDidMount() {
        this.props.updetePreload(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.countClientsOnLine}`).then(response => {
            this.props.updetePreload(false)
            this.props.setClients(response.data.items)
            this.props.setTotatCount(response.data.totalCount)
        })
    }

    onClickSpan = (page: number) => {
        this.props.updetePreload(true)
        this.props.updetePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countClientsOnLine}`).then(response => {
            this.props.updetePreload(false)
            this.props.setClients(response.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFollowed
                    ? <Preloader/>
                    : <Clients clients={this.props.clients}
                               onClickSpan={this.onClickSpan}
                               countClientsOnLine={this.props.countClientsOnLine}
                               page={this.props.page}
                               unSubscribeClient={this.props.unSubscribeClient}
                               subscribeClient={this.props.subscribeClient}
                               totalCount={this.props.totalCount}
                               updetePage={this.props.updetePage}/>
                }
            </>)

    }
}


export default ClientsApi;