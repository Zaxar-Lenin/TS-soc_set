import React from 'react';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import {MyPostType} from "../../../Types/Types";
import ProfilInfo from "./ProfilInfo/ProfilInfo";
import {ProfilUserType} from "../../../Redux/profil-reducer";


// props: ArrMyPostType

type MyPostPropsTypes = {
    myPosts: Array<MyPostType>
    messange: string
    addText: () => void
    upDateValueText: (text: string) => void
    profilUser: ProfilUserType
    isUser: boolean
}


const Profil = (props: MyPostPropsTypes) => {


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