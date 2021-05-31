import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Work from './work/Work';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//     import { faReact} from '@fortawesome/free-brands-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'

import Title from '../common/components/title/Title';
import social from './../../assets/images/social.jpg'
import movies from '../../assets/images/movies.jpg'
import todolist from './../../assets/images/todolist.jpg'
import todo_fb from './../../assets/images/todo_FB.jpg'

import {Fade} from "react-awesome-reveal";

const Works = () => {
    const works = [
        {
            title: 'Movies_project',
            description: 'This project is an example of usage of React/Redux along with Redux Thunk, separation in' +
                ' UI BLL DAL , Formik, Axios.',
            imageUrl: movies,
            href: 'http://grok88.github.io/movie_proj/',
            repository: 'https://github.com/grok88/movie_proj'
        },
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
            title: 'TodoList_firebase',
            description: 'This project is an example of usage of React/Redux/Firebase along with Redux Thunk,' +
                ' separation in UI BLL DAL , Formik, Material UI usage.',
            imageUrl: todo_fb,
            href: 'https://github.com/grok88/Todo_fb',
            repository: ''
        },
        // {
        //     title: 'Cards_project',
        //     description: 'Form implementation, table implementation along with files have been imbedded in this project',
        //     imageUrl: plug,
        //     href: 'https://grok88.github.io/cards_project/',
        //     repository: 'https://github.com/grok88/cards_project'
        // }
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
