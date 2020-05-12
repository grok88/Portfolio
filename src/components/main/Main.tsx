import React from "react";
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
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