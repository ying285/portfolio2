import React from 'react'
import ProjectDetail from './ProjectDetail'
import forecast from '../../public/forecast.jpg'
import blog from '../../public/blog.jpg'
import dashborad from '../../public/dashborad.jpg'
import styles from '../../styles/project.module.scss'

const MyProjects = () => {
  return (
    <div className={styles.project}>
        <h1>Projects</h1>
        <ProjectDetail title='Weather Forecast  Extension App' 
        detail='A practical and pleasant Weather Forecast Chrome Extension with web API, built with Javascript.'
        image={forecast}
         btn1='https://weatherextension.netlify.app/'
         btn2='https://github.com/ying285/chrome-extension-weather'
        />
         <ProjectDetail title="Alisa's blog"
        detail="My daughter's blog, builds with Nextjs and mongoDB."
        image={blog}
        btn1='https://weatherextension.netlify.app/'
         btn2='https://github.com/ying285/chrome-extension-weather'
        />
         <ProjectDetail title='A dashborad App' 
        detail='A fantastic dashborad App, Frontend builds with Reactjs and typescript. Backend builds with nodejs and MongoDB.'
        image={dashborad}
        btn1='https://weatherextension.netlify.app/'
         btn2='https://github.com/ying285/chrome-extension-weather'
        />
    </div>
  )
}

export default MyProjects