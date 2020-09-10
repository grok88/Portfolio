import React from "react";
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from "./work/Work";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLaptopCode, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import Title from "../common/components/title/Title";



const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={style.line}></div>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <Title title={'Portfolio.'}  icon={faBriefcase}/>
                <div className={style.works}>
                    <Work title={'Social network'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'TodoList'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Work 3'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Work 4'} description={'Lorem ipsum dolor sit amet.'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;