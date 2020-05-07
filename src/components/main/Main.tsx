import React from "react";
import style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
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