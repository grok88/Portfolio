import React from "react";
import style from './Skill.module.css';

type SkillType = {
    title: string
}

const Skill = (props: SkillType) => {
    const {title} = props;
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eum iusto labore libero
                necessitatibus nostrum perferendis quas reiciendis rerum sequi.</p>
        </div>
    );
}

export default Skill;