import React, {useEffect} from 'react';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import {MyPostType} from "../../../Types/Types";
import ProfilInfo from "./ProfilInfo/ProfilInfo";
import {ProfilUserType} from "../../../Redux/profil-reducer";
import axios from "axios";
import {useParams} from "react-router-dom";


// props: ArrMyPostType

type MyPostPropsTypes = {
    myPosts: Array<MyPostType>
    messange: string
    addText: () => void
    upDateValueText: (text: string) => void
    profilUser: ProfilUserType
    isUser: boolean
    setUserProfil: (user: ProfilUserType) => void
    updeteIsUser: (isUser: boolean) => void
}


const Profil = (props: MyPostPropsTypes) => {
    let {idUser} = useParams()
    let id = {idUser}
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id.idUser}`).then(response => {
            props.setUserProfil(response.data)
            props.updeteIsUser(true)
        })
    }, [])

    let MyPostTeg = props.myPosts.map(p => <MyPost key = {p.id} id = {p.id} title = {p.title} coment = {p.coment} like = {p.like}/>)

    return(
        <div className={s.profil}>
            <H1/>
            <ProfilInfo isUser = {props.isUser} profilUser={props.profilUser} addText = {props.addText} upDateValueText = {props.upDateValueText} messange = {props.messange}/>
            {MyPostTeg}
        </div>
    );
}

export default Profil;