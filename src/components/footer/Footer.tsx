import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import ContactBlock from "./contactBlock/ContactBlock";
import Title from "../common/components/title/Title";
import {faIdCard} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Alexander Goryacko'} icon={faIdCard}/>
                <div className={style.infoContact}>
                   <ContactBlock  title={"Email"} contentSpanOne={"test@mail.ru"} contentSpanTwo={"grok88@tut.by"}/>
                   <ContactBlock  title={"Call me"} contentSpanOne={"+375 29 500-0000"} contentSpanTwo={"+375 29 300-0000"}/>
                   <ContactBlock  title={"Address"} contentSpanOne={"г.Глубокое, ул. Садовая 34 , кв 44"} contentSpanTwo={"Витебская обл., Беларусь"}/>
                </div>
                <div className={style.copyRight}>
                    <p>© Copyrights 2020. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;