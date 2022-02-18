import React from 'react';
import H1 from './H1/H1';
import MyPost from './MyPost/MyPost';
import s from './Profil.module.css'
import {MyPostType} from "../../../Types/Types";
import ProfilInfo from "./ProfilInfo/ProfilInfo";


// props: ArrMyPostType

type MyPostPropsTypes = {
    MyPost: Array<MyPostType>
    messange: string
    onAddText: () => void
    onChangeUpdateValue: (text: string) => void


}


const Profil = (props: MyPostPropsTypes) => {


    let MyPostTeg = props.MyPost.map(p => <MyPost id = {p.id} title = {p.title} coment = {p.coment} like = {p.like}/>)

    return(
        <div className={s.profil}>
            <H1/>
            {/*<ProfilInfoContener masseng = {props.masseng} dispatсh = {props.dispatсh}/>*/}
            <ProfilInfo onAddText = {props.onAddText} onChangeUpdateValue = {props.onChangeUpdateValue} messange = {props.messange}/>
            {MyPostTeg}
        </div>
    );
}

export default Profil;