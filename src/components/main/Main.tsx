import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div id='header' className={style.mainBlock}>
            <div className={styleContainer.container + ' ' + style.test}>
                <div className={style.info}>
                    <span className={style.welcome}>Hi There !</span>
                    <h1 className={style.title}>I'm<span className={style.subtitle}> Alexander Goryacko</span></h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    {/*<img src={girl} alt=""/>*/}
                </div>
            </div>
        </div>
    );
}

export default Main;