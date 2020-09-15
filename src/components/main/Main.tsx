import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div id='header' className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.info}>
                    <span>Hi There</span>
                    <h1><span className={style.subtitle}>I Am Alex Gor</span></h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}

export default  Main;