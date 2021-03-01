import React from 'react';
import styles from './header.module.css';
import styles_common from '../../common/styles/style.module.css';

export const Header = () => {
    return (
        <div className={styles.header_block}>
            <div className={`${styles_common.container} ${styles.header_container}`}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src="" alt="logo" />
                    <span className={styles.logo_name}>Dmytro Storozhenko</span>
                </div>
                <div className={styles.menu}>
                    <span className={styles.menu_item}>
                        <a href="#">Main</a>
                    </span>
                    <span className={styles.menu_item}>
                        <a href="#">Skills</a>
                    </span>
                    <span className={styles.menu_item}>
                        <a href="#">Projects</a>
                    </span>
                    <span className={styles.menu_item}>
                        <a href="#">Contacts</a>
                    </span>
                </div>

            </div>
        </div>
    );
}
