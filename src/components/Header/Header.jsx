import React from 'react'
import styles from './Header.module.scss'

const Header = ({ heading, subheading }) => {
   return (
      <header className={styles.header}>
         <h1 className={styles.heading}>{heading}</h1>
         <h2 className={styles.subheading}>{subheading}</h2>
      </header>
   )
}

export default Header
