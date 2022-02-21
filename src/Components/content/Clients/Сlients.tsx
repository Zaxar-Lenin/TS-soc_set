import React from 'react';
import {СlientsPropsType} from "../../../Redux/сlients-reducer";
import s from './Clients.module.css'


type СlientsNowType = {
    unSubscribeClient: (id: number) => void
    subscribeClient: (id: number) => void
    clients: СlientsPropsType[]
    setClients: (user: СlientsPropsType[]) => void

}

const Сlients = (props: СlientsNowType) => {
    if(props.clients.length === 0){
        props.setClients([{
                id: 1,
                foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
                subscribe: true,
                intelligence: "I like write code",
                location: {country: "Belarus", city: "Minsk"}
            },
                {
                    id: 2,
                    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
                    subscribe: true,
                    intelligence: "I like write code",
                    location: {country: "Belarus", city: "Minsk"}
                },
                {
                    id: 3,
                    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNEezIgTXhB9_OTZCAicRofN62-_pH5z2NiHa_nA2s492NU8NFymAbTpMbNm0NLeLtJw&usqp=CAU",
                    subscribe: true,
                    intelligence: "I like write code",
                    location: {country: "Belarus", city: "Minsk"}
                }
            ]
        )
    }

    return (
        <div className={s.clients}>
            {props.clients.map(m => <div key={m.id} className={s.client}>
                <div className={s.box1}>
                    <img className={s.image} src={m.foto} alt=""/>
                    {m.subscribe
                        ? <div className={s.button} onClick={() => props.unSubscribeClient(m.id)}>unsubscribe</div>
                        : <div className={s.button} onClick={() => props.subscribeClient(m.id)}>subscribe</div>}
                </div>
                <div className={s.box2}>
                    <div>{m.intelligence}</div>
                    <div><span>{m.location.country}</span><span>{m.location.city}</span></div>
                </div>
            </div>)}
        </div>
    )
}


export default Сlients;