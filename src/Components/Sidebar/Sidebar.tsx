import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <div>
                <ul className={s.menu}>
                    <li>
                        <NavLink to="/profil" className={ navData =>  navData.isActive ? s.active : s.list}>Профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" className={ navData =>  navData.isActive ? s.active : s.list}>Диалоги</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/klients" className={ navData =>  navData.isActive ? s.active : s.list}>Клиенты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/zakaz"  className={ navData =>  navData.isActive ? s.active : s.list}>Заказы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comp" className={ navData =>  navData.isActive ? s.active : s.list}>О компании</NavLink>
                    </li>
                </ul>
            </div>
            {/* <div>
                Вчера
            </div> */}
        </aside>
    );
}

export default Sidebar;