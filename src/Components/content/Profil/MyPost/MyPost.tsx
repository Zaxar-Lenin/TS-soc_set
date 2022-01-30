import React from 'react';
import { MyPostType } from '../../../../App';
import s from './MyPost.module.css'

const MyPost: React.FC<MyPostType> = ({like, coment, title}) => {
    return(
        <div >
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpZIYpH-kndwt4nJ8K0PJ_rVD6Qh6rR42Rg&usqp=CAU" alt="" className={s.avatar} /></div>
            <div><span>{'Coment:' + coment + " " + 'Like:' + like + " " + 'Name:' + title}</span></div>
        </div>
    );
}

export default MyPost;