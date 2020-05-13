import React from "react";
import style from './Work.module.css';
import styleContainer from '../common/styles/Container.module.css';

type PropsType = {
    title: string,
    description: string
}

const Work = (props: PropsType) => {
    const {title, description} = props;
    return (
        <div className={style.work}>
            <div className={style.imageBlock}>
                <div className={style.img}></div>
                <button>Смотреть</button>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Work;