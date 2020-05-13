import React from "react";
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2>Contacts</h2>
                <div className={style.contactForm}>
                    <h3 className={style.contactTitle}>Связаться со мной</h3>
                    <form action="#" method={"post"} className={style.contactForm}>
                        <div className={style.field}>
                            <label htmlFor="contactFormUserName">Name</label>
                            <input type="text" name={"username"} id={"contactFormUserName"}/>
                        </div>
                        <div className={style.field}>
                            <label htmlFor="contactFormUserEmail">Email</label>
                            <input type="text" name={"useremail"} id={"contactFormUserEmail"}/>
                        </div>
                        <div className={`${style.field} ${style.message}`}>
                            <label htmlFor="contactFormUserMessage">Message</label>
                            <textarea name="textarea" id="contactFormUserMessage"></textarea>
                        </div>
                        <div className={style.button}>
                            <a href="#1" className={style.enter}>
                                <span>Submit</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;