import React, {FC} from 'react';
import styles from './project.module.css';

export type ProjectType = {
    img: string
    description: string
    project_link: string
    title: string
}

export const Project: FC<ProjectType> = (props) => {
    return (
        <div className={styles.project_container}>
            <div className={styles.project_img}>
                <img src={props.img} alt={props.title}/>
                <a href={props.project_link}><button>Watch...</button></a>
            </div>
            <div className={styles.title}><h3>{props.title}</h3></div>
            <div className={styles.description}>{props.description}</div>
        </div>
    );
}
