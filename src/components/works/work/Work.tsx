import React from 'react';
import style from './Work.module.scss';

type PropsType = {
    title: string;
    description: string;
    imageUrl:string;
}

const Work = (props: PropsType) => {
    const {title, description,imageUrl} = props;
    return (
        <div className={style.work}>
            <a href="#" className={style.workItem}>
                <div className={style.workImage}>
                    <img src={imageUrl} alt="#"/>
                </div>
                <div className={style.workContent}>
                    <span className={style.cat}>{title}</span>
                    <h4 className={style.title}>Best Way to Design </h4>
                    <div className={style.workDescription}>{description}</div>
                </div>
            </a>
        </div>
    );
}

//old

// const Work = (props: PropsType) => {
//     const {title, description} = props;
//     return (
//         <div className={style.work}>
//             <div className={style.imageBlock}>
//                 <div className={style.img}></div>
//                 <button>Смотреть</button>
//             </div>
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </div>
//     );
// }

export default Work;