import React from 'react'
import ContentImage from './ContentImage'
import ContentText from './ContentText'
import styles from '../../styles/index.module.scss'

const Content = () => {
  return (
    <div className={styles.content}>
        <div className={styles.content_layout}>
        <ContentImage />
        <ContentText />
        </div>
        
    </div>
  )
}

export default Content