import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthType} from "../../Redux/auth-reducer";

type HeaderType = {
    authDate: AuthType
    authLogOutUserInProfile: () => void
}
const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.image}>Yndex</div>
            {props.authDate.isAuth
                ? <div className={s.div_link}>
                    <div className={s.inform}>{props.authDate.login} - <button
                        onClick={props.authLogOutUserInProfile}>LogOut</button></div>
                </div>
                : <div className={s.div_link}><NavLink className={s.link} to="/login">LOGIN</NavLink></div>}
        </header>
    );
}

export default Header;