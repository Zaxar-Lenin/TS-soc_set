import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <div>
                <ul className={s.menu}>
                    <li>
                        <a href="/profil" className={s.list}>Профиль</a>
                    </li>
                    <li>
                        <a href="/dialogs" className={s.list}>Диалоги</a>
                    </li>
                    <li>
                        <a href="" className={s.list}>Заказы</a>
                    </li>
                    <li>
                        <a href="" className={s.list}>Клиенты</a>
                    </li>
                    <li>
                        <a href="" className={s.list}>О компании</a>
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