import React from 'react'
import styles from '../styles/project.module.scss'

interface Props {
    title: string;
    color: string;
    link:string | undefined;
    target:string;
   
  }

const Button:React.FC<Props> = ({title, color, link, target}) => {
  return (
    < >
    <a href={link} target={target}>
    <button style={{backgroundColor:`${color}`}} className={styles.project_detail_btndetail}>{title}</button>
    </a>
    </>
  )
}

export default Button