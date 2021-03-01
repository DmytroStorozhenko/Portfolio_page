import React from 'react';
import styles from './main.module.css';
import styles_common from "../../common/styles/style.module.css";

export const Main = () => {
    return (
        <div className={`${styles_common.block} ${styles.main_block}`}>
            <div className={`${styles_common.container} ${styles.main_container}`}>
                <div className={styles.about_me}>
                    <div className={styles.title}>
                        <h1>Dmytro Storozhenko</h1>
                        <h2>Frontend developer</h2>
                    </div>
                    <div className={styles.qualities}>
                        <h3>Personal qualities:</h3>
                        <div><span>- Responsibility</span></div>
                        <div><span>- The desire to develop</span></div>
                        <div><span>- Ability to learn</span></div>
                    </div>
                </div>
                <div className={styles.photo}>
                    <img src="" alt="photo"/>
                </div>
            </div>
        </div>
    );
}
