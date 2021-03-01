import React from 'react';
import styles from './projects.module.css'
import styles_common from '../../common/styles/style.module.css'
import {Project, ProjectType} from "./Project/Project";

const projects: Array<ProjectType> = [
    {
        img: '',
        project_link: '',
        title: 'Todolist',
        description: 'Task manager, created with React library'
    },
    {
        img: '',
        project_link: '',
        title: 'Repair',
        description: 'Landing'
    }
]

export const Projects = () => {
    return (
        <div className={`${styles_common.block} ${styles.projects_block}`}>
            <div className={`${styles_common.container} ${styles.project_container}`}>
                <h2 className={styles_common.heading}>My projects:</h2>
                <div className={styles.projects}>
                    {projects.map((project, index) => (
                            <Project
                                key={index}
                                img={project.img}
                                project_link={project.project_link}
                                title={project.title}
                                description={project.description}/>
                        )
                    )}
                </div>
                <div className={styles.github_link}>
                    <p>You can find more projects at the link: </p>
                    <a href="https://github.com/DmytroStorozhenko">https://github.com/DmytroStorozhenko</a>
                </div>
            </div>
        </div>
    );
}
