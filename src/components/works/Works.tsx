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
    const works = [
        {
            title: 'Social network',
            description: 'This social network is a example of my skills implemented in the technology of creating a system corresponding to the assaigned task. ',
            imageUrl: social,
            href: 'https://grok88.github.io/socialWeb/',
            repository: 'https://github.com/grok88/socialWeb'
        },
        {
            title: 'TodoList',
            description: 'This project is an example of usage of React/Redux/Redux Toolkit along with Redux Thunk, separation in UI BLL DAL , Formik, Material UI usage.  In addition, Storybook and Jest have been used, as well.',
            imageUrl: todolist,
            href: 'https://grok88.github.io/TodoList_new/',
            repository: 'https://github.com/grok88/TodoList_new'
        },
        {
            title: 'Cards_project',
            description: 'Form implementation, table implementation along with files have been imbedded in this project',
            imageUrl: plug,
            href: 'https://grok88.github.io/cards_project/',
            repository: 'https://github.com/grok88/cards_project'
        }
    ]
    return (
        <div id={'portfolio'} className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Fade direction={'left'} style={{width: '100%'}}>
                    <Title title={'Portfolio.'} icon={faBriefcase}/>
                    <div className={style.works}>
                        {
                            works.map((work, i) => <Work key={i}
                                                         title={work.title}
                                                         description={work.description}
                                                         imageUrl={work.imageUrl}
                                                         href={work.href}
                                                         repository={work.repository}/>)
                        }
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Works;
