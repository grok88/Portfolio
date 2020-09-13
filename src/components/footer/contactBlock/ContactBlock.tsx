import React from "react";
import style from './ContactBlock.module.scss';

type PropsType = {
    title:string,
    contentSpanOne: string,
    contentSpanTwo: string
}

const ContactBlock = (props:PropsType) => {
    const {title, contentSpanOne, contentSpanTwo} = props;
    return (
        <div className={style.contactBlock}>
            <h4>{title}</h4>
            <span>{contentSpanOne}</span>
            <span>{contentSpanTwo}</span>
        </div>
    );
}
export default ContactBlock;