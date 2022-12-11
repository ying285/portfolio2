import React from 'react'
import styles from '../../styles/index.module.scss'


interface Props {
  title: string;
  color: string;
 
}

const ContentLinks:React.FC<Props> = ({title, color}) => {
  return (
    
    
    <div className={styles.ContentLinks} style={{ backgroundColor: color }}>
      <p>{title}</p>
    </div>
    
    
  )
}

export default ContentLinks