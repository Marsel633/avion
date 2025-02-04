import React from 'react'
import { NavbarItems } from '../../shared/config/arrays'
import { Link } from 'react-router'
import styles from "./Navbar.module.css"

export const Navbar:React.FC = () => {
  return (
    <nav className={`${styles.navbar} ${styles.desktop}`}>
        {NavbarItems.map((item, index) => (
            <Link key={index} to={"#"}>{item}</Link>
        ))}
    </nav>
  )
}
