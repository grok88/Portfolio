import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href='#1'>Главная</a>
            <a href='#1'>Скиллы</a>
            <a href='#1'>Проекты</a>
            <a href='#1'>Контакты</a>
        </div>
    );
}

export default Nav;