import React from "react";
import style from "./SkillBar.module.scss";

type SkillBarPropsType = {
    title:string;
    percent:string;
}
export const SkillBar = (props: SkillBarPropsType) => {
    const {title,percent} = props;
    return (
        <>
            <div className={style.progressbarTitle}>
                <h3>{title}</h3>
                <span className={style.percent}>{percent}%</span>
            </div>
            <div className={style.barContainer}>
                <span className={style.progressbar} style={{width: `${percent}%`}}></span>
            </div>
        </>
    );
}