import React from 'react'
import styles from '../../styles/index.module.scss'
import ContentLinks from './ContentLinks'
import {Slide} from 'react-awesome-reveal'

const ContentText = () => {
  return (
    <div className={styles.contentText}>
    <Slide direction='up' triggerOnce>
    <h1>Hello</h1>
    </Slide>
    
    <div className={styles.contentText_detail}>
      <Slide direction='up'cascade>
    <div>
    <p>I am a frontend developer in Stockholm, Sweden.</p>
    <p>Now I am looking for a new opportunity to continue</p>
    <p>my career as frontend developer.</p>
    <p>Contact me if you are interested in my experiences.</p>
    </div>
    </Slide>
     </div>
     
    <div className={styles.contentText_links}>
    <Slide direction='up' cascade>
    <ContentLinks title='Resume' color='orange' />
    <ContentLinks title='Project' color='red'/>
    <ContentLinks title='Contact' color='skyblue'/>
    </Slide>
    </div>
   
    </div>
  )
}
export default ContentText