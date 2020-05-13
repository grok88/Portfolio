import React from "react";
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2>My Portfolio</h2>
                <div className={style.works}>
                    <Work title={'Work 1'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Work 2'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Work 3'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Work 4'} description={'Lorem ipsum dolor sit amet.'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;