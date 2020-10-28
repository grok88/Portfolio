import React from 'react';
import style from './Work.module.scss';

type PropsType = {
    title: string;
    description: string;
    imageUrl:string;
    href:string;
    repository:string
}

const Work = (props: PropsType) => {
    const {title, description,imageUrl,href,repository} = props;
    return (
        <div className={style.work}>
           <div className={style.workContainer}>
               <a href={href} className={style.workItem} target='_blank'>
                   <div className={style.workImage}>
                       <img src={imageUrl} alt="#"/>
                   </div>
               </a>
               <div className={style.workContent}>
                   <span className={style.cat}>{title}</span>
                   <h4 className={style.title}>In development </h4>
                   <div className={style.workDescription}>{description}</div>
                   <div >
                       <a href={repository} target='_blank' className={style.cat}>Open code</a>
                   </div>
                   {/*<div className={style.workDescription}>{repo}</div>*/}
               </div>
           </div>
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
