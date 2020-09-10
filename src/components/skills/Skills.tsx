import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <Title title={'My skills.'} icon={faLaptopCode}/>
                <div className={style.skills}>
                    <Skill title={'JS'}/>
                    <Skill title={'REACT'}/>
                    <Skill title={'CSS'}/>
                    {/*<Skill title={'CSS'}/>*/}
                    {/*<Skill title={'CSS'}/>*/}
                    {/*<Skill title={'CSS'}/>*/}
                </div>
            </div>
        </div>
    );
}

export default  Skills;