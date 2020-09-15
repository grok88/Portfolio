import React from "react";
import style from './Sidebar.module.scss';
import frontEnd from '../../assets/images/frontend.jpg'

export const Sidebar = () => {
    return (
        <>
            <div className={style.sidebar + ' ' + style.sidebarLeft}>
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
                            <a href="#header" className={style.active}>Home</a>
                        </li>
                        <li>
                            <a href="#skills">About</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className={style.line}></div>
                </nav>
            </div>
            {/* ${style.menuOpen}*/}
            <div className={`${style.burgerMenu}`}>
                <div className={style.inlineLineFix}>
                    <div className={style.dlLineMenu + ' ' + style.dlLineHalf + ' ' + style.dlFirstLine}></div>
                    <div className={style.dlLineMenu}></div>
                    <div className={style.dlLineMenu+ ' ' + style.dlLineHalf + ' ' + style.dlLastLine}></div>
                </div>
            </div>
        </>
    );
}
