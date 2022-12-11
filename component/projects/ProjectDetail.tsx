import React from 'react'
import styles from '../../styles/project.module.scss'
import Button from '../../utils/Button';
import Image from 'next/image'

interface Props {
    title: string;
    detail: string;
    image:any
     btn1:string;
     btn2:string
   
  }

const ProjectDetail:React.FC<Props> = ({title, detail, image, btn1, btn2}) => {
  return (
    <div className={styles.project_detail}>
        
        <div className={styles.project_detail_text}>
            <div>
          <h3>{title}</h3>  
          <p>{detail}</p>
        </div> 
        <div className={styles.project_detail_btn}>
            <Button title='See App' color='black' link={btn1} target='_blank'  />

            <Button title='Code In Github' color='#b36402' link={btn2} target='_blank' /> 
        </div>
        </div>
        <div className={styles.project_detail_image}>
            <Image 
            src={image}
            height='250'
            width='400'
            alt='image'
            />
        </div>
        <div>

        </div>
       
        

    </div>
  )
}

export default ProjectDetail