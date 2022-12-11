import React from 'react'
import styles from '../styles/index.module.scss' 

const Footer = () => {
  return (
    <ul className={styles.footer}>
        <li className={styles.footer_phone}><p>Phone</p><span>0046762881628</span></li>
        <li className={styles.footer_email}><p>Email</p><span>ying285@hotmail.com</span></li>
        <li className={styles.footer_follow}><p>Follow me</p><span><a href="https://www.linkedin.com/in/wang-ying-a874a754/" target="_blank" rel="noopener noreferrer">In</a></span></li>
    </ul>
  )
}

export default Footer