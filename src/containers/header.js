import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/logo';
import Login from '../components/login';
import styles from './header.module.css';


export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Logo className={styles.logo}/>
            <div className={styles.navigation}>
                <NavLink activeClassName={styles.active} exact to='/'>Home</NavLink>
                <NavLink activeClassName={styles.active} to='/features'>Features</NavLink>
                <NavLink activeClassName={styles.active} to='/pricing'>Pricing</NavLink>
                <NavLink activeClassName={styles.active} to='/faqs'>FAQ's</NavLink>
                <NavLink activeClassName={styles.active} to='/blog'>Blog</NavLink>
                <NavLink activeClassName={styles.active} to='/contacts'>Contacts</NavLink>
            </div>           
            <Login className={styles.login}/>
        </header>
    )
}

