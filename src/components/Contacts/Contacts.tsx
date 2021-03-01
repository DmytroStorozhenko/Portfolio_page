import React from 'react';
import styles from './contacts.module.css';
import styles_common from '../../common/styles/style.module.css';
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import telegram from '../../assets/icons/telegram.png'
import fb from '../../assets/icons/fb.png'
import vk from '../../assets/icons/vk.png'

type ContactsListType = {
    title: string
    value: string
    link: string
}

type IconLinksType = {
    link: string
    icon: string
}

const contactsList: Array<ContactsListType> = [
    {title: 'Mail', value: 'dmytrostorozhenko1994@gmail.com', link: 'mailto:dmytrostorozhenko1994@gmail.com'},
    {title: 'Phone', value: '+380633044355', link: 'tel:+380633044355'},
    {title: 'Skype', value: 'dmytro_storozhenko', link: 'skype:dmytro_storozhenko?add'},
    {title: 'Address', value: 'Bila Tserkva, Kiev region, Ukraine', link: '#'}
]

const iconLinks: Array<IconLinksType> = [
    {link: 'https://github.com/DmytroStorozhenko', icon: github},
    {link: 'https://www.linkedin.com/in/dmytro-storozhenko/', icon: linkedin},
    {link: 'https://t.me/DmytroStorozhenko', icon: telegram},
    {link: 'https://www.facebook.com/dmytro.storozhenko', icon: fb},
    {link: 'https://vk.com/id85950782', icon: vk}
]

export const Contacts = () => {
    return (
        <div className={`${styles_common.block} ${styles.contacts_block}`}>
            <div className={`${styles_common.container} ${styles.contacts_container}`}>
                <div className={styles.contact_me}>
                    <h2 className={styles.contact_title}>Contact me: </h2>
                    <div className={styles.contacts_list}>
                        {contactsList.map((contact, index) => (
                            <div className={styles.contact_item} key={index}>
                                <div className={styles.title}>
                                    {contact.title}
                                </div>
                                <div className={styles.value}>
                                    <a href={contact.link}>
                                        {contact.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.icon_links}>
                        {iconLinks.map((iconLink, index) => (
                            <div className={styles.iconLink} key={index}>
                                <a href={iconLink.link} target='_blank'>
                                    <img src={iconLink.icon} alt="icon" className={styles.icon}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.message_form}>
                    <h2 className={styles_common.heading}>...or send me a message</h2>
                    <form action="send.php" method="post">
                        <div className={styles.form_item}>
                            <input type="text" name="mail" placeholder="Your mail" required/>
                        </div>
                        <div className={styles.form_item}>
                            <input type="text" name="theme" placeholder="Message theme"/>
                        </div>
                        <div className={styles.form_item_textarea}>
                            <textarea name="message" placeholder="Message..." required/>
                        </div>
                        <input type="submit" value="Send" className={styles.btn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}
