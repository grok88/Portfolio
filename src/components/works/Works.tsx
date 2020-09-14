import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//     import { faReact} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faBriefcase  } from '@fortawesome/free-solid-svg-icons'

import Title from '../common/components/title/Title';
import social from  './../../assets/images/social.jpg'
import todolist from  './../../assets/images/todolist.jpg'
import plug from  './../../assets/images/plug.jpg'


const Works = () => {
    return (
        <div className={style.worksBlock}>
            {/*<div className={style.line}></div>*/}
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <Title title={'Portfolio.'}  icon={faBriefcase}/>
                <div className={style.works}>
                    <Work title={'Social network'} description={'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'} imageUrl={social}/>
                    <Work title={'TodoList'} description={'Lorem ipsum dolor sit amet.'} imageUrl={todolist}/>
                    <Work title={'Work 3'} description={'Lorem ipsum dolor sit amet.'} imageUrl={plug}/>
                    <Work title={'Work 4'} description={'Lorem ipsum dolor sit amet.'} imageUrl={plug}/>
                </div>
            </div>
        </div>
    );
}

export default Works;