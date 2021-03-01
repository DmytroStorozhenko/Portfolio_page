import React, {FC} from 'react';
import styles from './skill.module.css';

export type SkillType = {
    icon: string
    title: string
    description: string
}

export const Skill: FC<SkillType> = (props) => {
    return (
        <div className={styles.skill_container}>
            <div className={styles.icon}><img src={props.icon} alt="icon"/></div>
            <div className={styles.title}><h3>{props.title}</h3></div>
            <div className={styles.description}>{props.description}</div>
        </div>
    );
}
