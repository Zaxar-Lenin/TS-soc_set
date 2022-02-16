import React from 'react';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import {MyPostType} from "../../../Types/Types";
import ProfilInfoContener from "./ProfilInfo/ProfilInfoContener";


// props: ArrMyPostType


const Profil = (props: { MyPosts: MyPostType[] }) => {

    let MyPostTeg = props.MyPosts.map(p => <MyPost id = {p.id} title = {p.title} coment = {p.coment} like = {p.like}/>)

    return(
        <div className={s.profil}>
            <H1/>
            {/*<ProfilInfoContener masseng = {props.masseng} dispatсh = {props.dispatсh}/>*/}
            <ProfilInfoContener/>
            {MyPostTeg}
        </div>
    );
}

export default Profil;