import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import Title from "../common/components/title/Title";
import {faCss3, faHtml5, faJs, faReact, faTypo3} from "@fortawesome/free-brands-svg-icons";
import {SkillBar} from "./skillBar/SkillBar";
import {Fade} from "react-awesome-reveal";

const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <Fade direction={'left'}>
                <div id={'skills'} className={`${styleContainer.container} ${style.skillContainer}`}>
                    <Title title={'My skills.'} icon={faLaptopCode}/>
                    <div className={style.aboutInfo}>
                        <div className={style.aboutInfoBlock}>
                            <div className={style.aboutDescription}>
                                <h3 className={style.title}>Hello, Im Alexander
                                    Goryacko</h3>
                                <p>To an English person, it will seem like simplified English, as a skeptical
                                    Cambridge friend of mine told me what Occidental is. The European languages are
                                    members
                                    of
                                    the
                                    same family.</p>
                            </div>
                        </div>
                        <div className={style.aboutInfoBlock}>
                            <div className={style.aboutSkills}>
                                <ul className={style.skillsBar}>
                                    <li>
                                        <SkillBar title={'JS'} percent={'80'}/>
                                    </li>
                                    <li>
                                        <SkillBar title={'REACT'} percent={'90'}/>
                                    </li>
                                    <li>
                                        <SkillBar title={'CSS'} percent={'70'}/>
                                    </li>
                                    <li>
                                        <SkillBar title={'HTML'} percent={'90'}/>
                                    </li>
                                    <li>
                                        <SkillBar title={'TYPESCRIPT'} percent={'70'}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.skills}>
                        <Skill title={'JS'} icon={faJs}/>
                        <Skill title={'REACT'} icon={faReact}/>
                        <Skill title={'CSS'} icon={faCss3}/>
                        <Skill title={'HTML'} icon={faHtml5}/>
                        <Skill title={'TYPESCRIPT'} icon={faTypo3}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;