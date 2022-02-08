import React from 'react';
import s from './MyPost.module.css'
import {MyPostType} from "../../../../Types/Types";

const MyPost: React.FC<MyPostType> = ({like, coment, title}) => {
    return(
        <div >
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU" alt="" className={s.avatar} /></div>
            <div><span>{'Coment:' + coment + " " + 'Like:' + like + " " + 'Name:' + title}</span></div>
        </div>
    );
}

export default MyPost;