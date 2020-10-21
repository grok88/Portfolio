import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import ContactBlock from "./contactBlock/ContactBlock";
import Title from "../common/components/title/Title";
import {faIdCard} from '@fortawesome/free-solid-svg-icons'
import {Fade} from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <Fade direction={'left'}>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <Title title={'Alexander Goryacko'} icon={faIdCard}/>
                    <div className={style.infoContact}>
                        <ContactBlock title={"Email"} contentSpanOne={"alexgoryacko@gmail.com"}
                                      contentSpanTwo={"grok88@tut.by"}/>
                        <ContactBlock title={"Call me"} contentSpanOne={"+375 29 590 6006"} contentSpanTwo={""}/>
                        <ContactBlock title={"Address"} contentSpanOne={"г.Глубокое,"}
                                      contentSpanTwo={"Витебская обл., Беларусь"}/>
                    </div>
                    <div className={style.copyRight}>
                        <p>© Copyrights 2020. All rights reserved.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;