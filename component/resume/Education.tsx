import React from 'react'
import styles from '../../styles/resume.module.scss'

interface Props {
    date: string;
    educationTitle: string;
    detail:string;
   
  }

const Education:React.FC<Props> = ({date, educationTitle,detail}) => {
  return (
    
    <div className={styles.resume_works_item}>
    <span>{date}</span> 
    <div>
    <h5>{educationTitle}</h5>
    <div>{detail}</div>  
    </div>
    </div>
  )
}

export default Education