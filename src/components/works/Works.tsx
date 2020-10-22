import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Work from './work/Work';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//     import { faReact} from '@fortawesome/free-brands-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'

import Title from '../common/components/title/Title';
import social from './../../assets/images/social.jpg'
import todolist from './../../assets/images/todolist.jpg'
import plug from './../../assets/images/plug.jpg'

import {Fade} from "react-awesome-reveal";

const Works = () => {
    return (
        <div id={'portfolio'} className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Fade direction={'left'} style={{width: '100%'}}>
                    <Title title={'Portfolio.'} icon={faBriefcase}/>
                    <div className={style.works}>
                        <Work title={'Social network'}
                              description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'}
                              imageUrl={social} href={'https://grok88.github.io/socialWeb/'}/>
                        <Work title={'TodoList'} description={'Lorem ipsum dolor sit amet.'} imageUrl={todolist}
                              href={'#'}/>
                        <Work title={'Cards_project'} description={'Lorem ipsum dolor sit amet.'} imageUrl={plug}
                              href={'https://grok88.github.io/cards_project/'}/>
                        {/*<Work title={'Work 4'} description={'Lorem ipsum dolor sit amet.'} imageUrl={plug}/>*/}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Works;