import React, {useEffect} from 'react';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import {MyPostType} from "../../../Types/Types";
import ProfilInfo from "./ProfilInfo/ProfilInfo";
import {ProfilUserType} from "../../../Redux/profil-reducer";
import {useParams} from "react-router-dom";


// props: ArrMyPostType

type MyPostPropsTypes = {
    myPosts: Array<MyPostType>
    addText: (text: string) => void
    profilUser: ProfilUserType
    isUser: boolean
    getUser: (idUser: string) => void
    status: string
    updateUserStatus: (status: string) => void
    getUserStatus: (id: string) => void
}


const Profil = (props: MyPostPropsTypes) => {
    let params = useParams<"id">()
    let idUser = params.id ? params.id : ""
    useEffect(() => {
        props.getUser(idUser)
        props.getUserStatus(idUser)
    }, [])

    let MyPostTeg = props.myPosts.map(p => <MyPost key={p.id} id={p.id} title={p.title} coment={p.coment}
                                                   like={p.like}/>)
    return (
        <div className={s.profil}>
            <H1/>
            <ProfilInfo updateUserStatus={props.updateUserStatus} status={props.status} isUser={props.isUser} profilUser={props.profilUser}
                        addText={props.addText}/>
            {MyPostTeg}
        </div>
    );
}

export default Profil;