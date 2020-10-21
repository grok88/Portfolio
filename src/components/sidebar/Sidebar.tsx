import React, {useState} from "react";
import style from './Sidebar.module.scss';
import frontEnd from '../../assets/images/frontend.jpg';
import {Link} from "react-scroll";

export const Sidebar = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <div className={collapsed ? `${style.sidebar} ${style.isOpen}` : `${style.sidebar}`}>
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
                            {/*<a href="#header">Home</a>*/}
                            <Link
                                activeClass={style.active}
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li>
                            {/*<a href="#skills">About</a>*/}
                            <Link
                                activeClass={style.active}
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >About</Link>
                        </li>
                        <li>
                            {/*<a href="#portfolio">Portfolio</a>*/}
                            <Link
                                activeClass={style.active}
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Portfolio</Link>
                        </li>
                        <li>
                            {/*<a href="#contact">Contact</a>*/}
                            <Link
                                activeClass={style.active}
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Contact</Link>
                        </li>
                    </ul>
                    <div className={style.line}></div>
                </nav>
            </div>

            <div className={collapsed ? `${style.burgerMenu} ${style.menuOpen}` : `${style.burgerMenu}`}
                 onClick={toggleMenu}>
                <div className={style.inlineLineFix}>
                    <div className={style.dlLineMenu + ' ' + style.dlLineHalf + ' ' + style.dlFirstLine}></div>
                    <div className={style.dlLineMenu}></div>
                    <div className={style.dlLineMenu + ' ' + style.dlLineHalf + ' ' + style.dlLastLine}></div>
                </div>
            </div>
        </>
    );
}
