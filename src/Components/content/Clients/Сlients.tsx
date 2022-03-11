import React from "react";
import s from "./Clients.module.css";
import {ClientsPropsType} from "../../../Redux/сlients-reducer";
import {NavLink} from "react-router-dom";


type СlientsNowType = {
    unSubscribeClient: (id: number) => void
    subscribeClient: (id: number) => void
    clients: ClientsPropsType[]
    totalCount: number
    countClientsOnLine: number
    page: number
    updetePage: (m: number) => void
    onClickSpan: (page: number) => void
}


export const Clients = (props: СlientsNowType) => {
    let pages = props.totalCount / props.countClientsOnLine

    let arrPages = []
    for (let i = 1; i <= pages; i++) {
        arrPages.push(i)
    }
    return (
        <div className={s.clients}>
            <div className={s.pagination}>
                {arrPages.map(m => <span key={m} onClick={() => {
                    props.onClickSpan(m)
                }} className={s.spanCorsor + " " + (props.page === m ? s.selected : "")}>{m}</span>)}
            </div>
            {props.clients.map(m => <div key={m.id} className={s.client}>
                <div className={s.box1}>
                    <NavLink to={"/profil/" + m.id}><img className={s.image}
                            src={m.photos.small !== null ? m.photos.small : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"}
                            alt=""/></NavLink>
                    {m.followed
                        ? <div className={s.button}
                               onClick={() => props.unSubscribeClient(m.id)}>unsubscribe</div>
                        :
                        <div className={s.button} onClick={() => props.subscribeClient(m.id)}>subscribe</div>}
                </div>
                <div className={s.box2}>
                    <div>{m.status}</div>
                    <div>{m.name}</div>
                    <div><span>{'m.location.country'}</span><span>{"m.location.city"}</span></div>
                </div>
            </div>)}
        </div>
    )
}