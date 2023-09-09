import React, { HtmlHTMLAttributes } from 'react'
import ResumeItem from './ResumeItem'
import Education from './Education'
import  {detail0, detail1, detail2, detail3, detail4}  from '../content/Data'
import styles from '../../styles/resume.module.scss'





const ResumeDetail = () => {
  return (
    <div className={styles.resume}>
       <h1>Resume</h1> 
        <div className={styles.resume_works}>
            
            <h3>Work Experiences</h3> 
            
            
            <div className={styles.resume_worksDetail}>
            <ResumeItem date='2023 Jun - 2023 Sep' company='Freelancer' detail={detail0}/>
            <ResumeItem date='2022 Aug - 2023 Jun' company='Hantverkshjäpeonline AB' detail={detail1}/>
            <ResumeItem date='2022 Feb - 2022 May' company='Watersheds AB (internship)' detail={detail2}/>
           </div>
        </div>
        <div className={styles.resume_educations}>
            <h3>Educations</h3>
            <div className={styles.resume_educationDetail}>
            <Education date='2021 Aug - 2022 Jan' educationTitle='Frontend | IT Education' detail={detail3}/>
            <Education date='2004 Feb - 2007 Jun' educationTitle="Economy & Administration | Master's Degree" detail={detail4}/>
            </div>
        </div>
        <div className={styles.resume_skills}>
            <h3>IT skills</h3>
            <ul className={styles.resume_skills_item}>
             
             <li><span>UI</span>: Figma, Wix, Boostrap, Sass, TailWind.</li>
             <li><span>Frontend</span>: Reactjs, Nextjs​</li>
             <li><span>Backend</span>: Nodejs, Python.​</li>
             <li><span>Database</span>: MySQL, MongoDB.</li>
             <li><span>Others</span>: Typescript, Git Redux.​</li> 
            </ul>
        </div>
     
    </div>
  )
}

export default ResumeDetail