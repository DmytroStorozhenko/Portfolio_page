import React from 'react';
import styles from './skills.module.css';
import {Skill, SkillType} from "./Skill/Skill";
import styles_common from "../../common/styles/style.module.css";

const skills: Array<SkillType> = [
    {
        icon: '',
        title: 'HTML/CSS',
        description: 'HTML 5, responsive and adaptive layout, SCSS, Less'
    },
    {
        icon: '',
        title: 'JS',
        description: 'Native JavaScript, Jquery, React, Redux, React/Redux, Axios, TypeScript.'
    }
]

export const Skills = () => {
    return (
        <div className={`${styles_common.block} ${styles.skills_block}`}>
            <div className={`${styles_common.container} ${styles.skills_container}`}>
                <h2 className={styles_common.heading}>My skills:</h2>
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
