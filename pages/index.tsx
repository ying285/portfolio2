import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Content from '../component/content/Content'
import styles from '../styles/index.module.scss'

const index = () => {
  return (
    <div className={styles.main}>
        <Header/>
        <Content />
        <Footer/>
    </div>
  )
}

export default index