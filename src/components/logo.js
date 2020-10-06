import React from 'react';
import styles from './logo.module.css';


export default function Logo({className}) {
    return (
        <div className={`${className} ${styles.logoContainer}`}>
            contact<span>mighty</span>
        </div>
    )
}
