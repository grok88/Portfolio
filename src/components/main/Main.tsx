import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
// import Particles from 'react-particles-js';

import ReactTypingEffect from 'react-typing-effect';

const Particles: any = require ('react-particles-js').default;

// import { Fade } from "react-awesome-reveal";

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

const Main = () => {
    return (
        <div id='header' className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions} />
            {/*<Fade direction={'left'}>*/}
                <div className={styleContainer.container + ' ' + style.test}>
                    <div className={style.info}>
                        <span className={style.welcome}>Hi There !</span>
                        <h1 className={style.title}>I'm<span className={style.subtitle}> Alexander Goryacko</span></h1>
                        {/*<p>Frontend Developer</p>*/}
                        <ReactTypingEffect
                            text='Frontend Developer'
                    />
                    </div>
                    <div className={style.photo}>
                        {/*<img src={photo} alt=""/>*/}
                    </div>
                </div>
            {/*</Fade>*/}
        </div>
    );
}

export default Main;