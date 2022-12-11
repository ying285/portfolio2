import React from 'react'
import styles from '../../styles/resume.module.scss'

interface Props {
    date: string;
    company: string;
    detail:string;
   
  }

const ResumeItem:React.FC<Props>= ({date, company,detail}) => {
  return (
    <div className={styles.resume_works_item}>
    <span>{date}</span> 
    <div>
    <h5>{company}</h5>
    <div>{detail}</div>  
    </div>
    
</div>
  )
}

export default ResumeItem