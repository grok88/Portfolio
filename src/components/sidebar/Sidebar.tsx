import React from "react";
import style from './Sidebar.module.scss';
import frontEnd from '../../assets/images/frontend.jpg'

export const Sidebar = () => {
    return (
        <div className={style.sidebar+ ' ' + style.sidebarLeft}>
            <div className={style.logo}>
                <h1>
                    <a href="#">
                        <img src={frontEnd} alt="logo"/>
                    </a>
                </h1>
            </div>
            <nav className={style.menu}>
                <ul className={style.list}>
                    <li>
                        <a href="#" className={style.active}>Home</a>
                    </li>
                    <li>
                        <a href="#" >About</a>
                    </li>
                    <li>
                        <a href="#" >Portfolio</a>
                    </li>
                    <li>
                        <a href="#" >Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
