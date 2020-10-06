import React from 'react';
import styles from './login.module.css';

export default function Login({className}) {
    return (
        <div className={`${className} ${styles.loginContainer}`}>
            <div className={styles.button}>Sign Up</div>
            <div className={styles.button}>Login</div>           
        </div>
    )
}
