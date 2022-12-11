import React from 'react'
import Image from 'next/image'
import styles from '../../styles/index.module.scss'
import {Slide} from 'react-awesome-reveal'


const ContentImage = () => {
  return (
    <div >
      <Slide direction='up'>
       <Image 
        className={styles.contentImage}
        src='/ying3.jpg'
        width={250}
        height={250}
        alt="picture2"
        />

      </Slide>
        
    </div>
  )
}

export default ContentImage