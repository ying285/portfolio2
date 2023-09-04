import React from 'react'
import ProjectDetail from './ProjectDetail'
import dashborad from '../../public/dashborad.png'
import styles from '../../styles/project.module.scss'

const MyProjects = () => {
  return (
    <div className={styles.project}>
        <h1>Projects</h1>
        <ProjectDetail title='A dashborad Application' 
        detail='A fantastic dashborad App, Frontend builds with Nextjs 13, typescript and Tailwind. API builds with Nextjs 13 and MongoDB.'
        image={dashborad}
        btn1=''
        btn2='https://github.com/ying285/new-Dashborad.git'
        /> 
    </div>
  )
}

export default MyProjects