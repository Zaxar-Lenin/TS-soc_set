import React from 'react';
import {ClientsPropsType} from "../../../Redux/сlients-reducer";
import {Clients} from "./Сlients";
import Preloader from "../../Common/Preloader";


type СlientsNowTypeApi = {
    unSubscribeClient: (id: number) => void
    subscribeClient: (id: number) => void
    clients: ClientsPropsType[]
    totalCount: number
    countClientsOnLine: number
    page: number
    isFollowed: boolean
    expectationArr: number[]
    setClientsTC: (page: number,countClientsOnLine: number) => void
    setPageUsers: (page: number,countClientsOnLine: number) => void

}


class ClientsApi extends React.Component<СlientsNowTypeApi, any> {
    componentDidMount() {
        this.props.setClientsTC(this.props.page,this.props.countClientsOnLine)
    }

    onClickSpan = (page: number) => {
        this.props.setPageUsers(page,this.props.countClientsOnLine)
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
                               expectationArr={this.props.expectationArr}/>
                }
            </>)

    }
}


export default ClientsApi;