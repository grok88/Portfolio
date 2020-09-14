import React from "react";
import style from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from "../common/components/title/Title";
import { faClipboard, faSoap, faArchway} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon , } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={'Contact Me.'} icon={faClipboard}/>
                <div className={style.contactFormItem}>
                    <h4 className={style.contactTitle}>get in touch</h4>
                    <form  className={style.contactForm}>
                        <div className={style.field}>
                            <label htmlFor="contactFormUserName">Enter your name*</label>
                            <input type="text" name={"username"} id={"contactFormUserName"}/>
                        </div>
                        <div className={style.field}>
                            <label htmlFor="contactFormUserEmail">Email</label>
                            <input type="text" name={"useremail"} id={"contactFormUserEmail"}/>
                        </div>
                        <div className={`${style.field} ${style.message}`}>
                            <label htmlFor="contactFormUserMessage">Message</label>
                            <textarea name="textarea" id="contactFormUserMessage" cols={30} rows={6}></textarea>
                        </div>
                        <div className={style.field}>
                           <button className={style.contactFormBtn}>Send Mail</button>
                        </div>
                    </form>
                </div>
                <div className={style.socialsMedia}>
                    <ul className={style.socialsList}>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArchway} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArchway} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArchway} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArchway} className={style.fa}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;