import React from 'react';
import style from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import {faArchway, faClipboard} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGithub, faLinkedin, faVk} from '@fortawesome/free-brands-svg-icons'
import {useFormik} from 'formik';
import axios from 'axios';


import {FontAwesomeIcon,} from "@fortawesome/react-fontawesome";

type FormValuesType = {
    name: string;
    email: string;
    text: string;
}
type LoginErrorType = {
    name?: string;
    email?: string;
    text?: string;
}

const validate = (values: FormValuesType) => {
    const errors: LoginErrorType = {};
    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.text) {
        errors.text = 'Required';
    }


    return errors;
};

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: ''
        },
        validate,
        onSubmit: values => {
            axios.post('/sendMessage', {values})
                .then((res) => {
                    alert(JSON.stringify(values));
                })
                .catch(err => {
                    console.log(err);
                });

            formik.resetForm();
            // resetForm({name:''});
        },
    });

    return (
        <div className={style.contactBlock}>
            <div className={style.line}></div>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>

                <Title title={'Contact Me.'} icon={faClipboard}/>
                <div className={style.contactFormItem}>
                    <h4 className={style.contactTitle}>get in touch</h4>
                    <form className={style.contactForm} onSubmit={formik.handleSubmit}>
                        <div className={style.field}>
                            <label
                                htmlFor="contactFormUserName">{formik.touched.name && formik.errors.name ?
                                <span style={{color: 'red'}}>{formik.errors.name}</span> : 'Enter your name*'}</label>
                            <input type="text" id={"contactFormUserName"} {...formik.getFieldProps('name')}/>
                        </div>
                        <div className={style.field}>
                            <label htmlFor="contactFormUserEmail">
                                {formik.touched.email && formik.errors.email ?
                                    <span style={{color: 'red'}}>{formik.errors.email}</span> : 'Enter your Email*'}
                            </label>
                            <input type="text" name="email"
                                   id={"contactFormUserEmail"} {...formik.getFieldProps('email')}/>
                            {/*<ErrorMessage name="email" />*/}
                        </div>
                        <div className={`${style.field} ${style.message}`}>
                            <label htmlFor="contactFormUserMessage">
                                {formik.touched.text && formik.errors.text ?
                                    <span style={{color: 'red'}}>{formik.errors.text}</span> : 'Enter your Message*'}
                            </label>
                            <textarea id="contactFormUserMessage" cols={30}
                                      rows={6} {...formik.getFieldProps('text')}></textarea>
                        </div>
                        <div className={style.field}>
                            <button className={style.contactFormBtn} type={"submit"}>Send Mail</button>
                        </div>
                    </form>
                </div>
                <div className={style.socialsMedia}>
                    <ul className={style.socialsList}>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} className={style.fa}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faVk} className={style.fa}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;