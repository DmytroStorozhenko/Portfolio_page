import React from 'react';
import styles from './footer.module.css';
import styles_common from '../../common/styles/style.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer_block}>
            <div className={`${styles_common.container} ${styles.footer_container}`}>
                <div className={styles.name}>
                    <span>©&nbsp;2020 - Dmytro Storozhenko</span>
                </div>
            </div>
        </div>
    );
}
