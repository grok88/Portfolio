import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}> My skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}/>
                    <Skill title={'REACT'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'CSS'}/>
                </div>
            </div>
        </div>
    );
}

export default  Skills;