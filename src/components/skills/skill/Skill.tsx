import React from "react";
import style from './Skill.module.scss';

import {FontAwesomeIcon,} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type SkillType = {
    title: string;
    icon:IconProp;
}

const Skill = (props: SkillType) => {
    const {title} = props;
    return (
        <div className={style.skill}>
            <div className={`${style.skillBlock} ${style.draw}`}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon} className={style.fa}/>
                </div>
                <h4 className={style.title}>{title}</h4>
                {/*<p className={style.separator}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
            </div>
        </div>
    );
}

export default Skill;
