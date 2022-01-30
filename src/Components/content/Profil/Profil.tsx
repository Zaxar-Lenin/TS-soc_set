import React from 'react';
import { ArrMyPostType } from '../../../App';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import ProfilInfo from './ProfilInfo/ProfilInfo';

const Profil = (props: ArrMyPostType) => {

    let MyPostTeg = props.MyPosts.map(p => <MyPost id = {p.id} title = {p.title} coment = {p.coment} like = {p.like}/>)

    return(
        <div className={s.profil}>
            <H1/>
            <ProfilInfo updateValueText = {props.updateValueText} masseng = {props.masseng} addUsers = {props.addUsers}/>
            
            {MyPostTeg}
        </div>
    );
}

export default Profil;