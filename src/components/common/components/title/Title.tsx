import React from "react";
import style from './Title.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faBriefcase} from '@fortawesome/free-solid-svg-icons'

type TitlePropsType = {
    title:string;
    icon:any
}

const Title = (props:TitlePropsType) => {
    return (<div className={style.pageHeading}>
                   <span className={style.icon}>
                       <FontAwesomeIcon icon={props.icon}/>
                   </span>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;