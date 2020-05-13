import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import ContactBlock from "./contactBlock/ContactBlock";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Alex Gor</h2>
                <div className={style.infoContact}>
                   <ContactBlock  title={"Email"} contentSpanOne={"test@mail.ru"} contentSpanTwo={"grok88@tut.by"}/>
                   <ContactBlock  title={"Call us"} contentSpanOne={"+375 29 500-0000"} contentSpanTwo={"+375 29 300-0000"}/>
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