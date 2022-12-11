import React,{useState} from 'react'
import styles from '../styles/index.module.scss'
import Link from 'next/link'

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className={styles.header}>
            <div className={styles.header_title}>
                <div className={styles.header_symbol}></div>
                 <Link href='/' className={styles.header_links}><h5 className={styles.header_name}>Ying Wang</h5></Link></div>
            <ul className={styles.header_menu}>
                <li onClick={()=>setActiveTab('link1')} ><Link  href='/resume' className={`${activeTab==='link1' ? styles.header_active :''} ${styles.header_links}`}><p>Resume</p></Link></li>
                 <li className={styles.header_border}></li> 
                <li onClick={()=>setActiveTab('link2')}><Link href='project'
                className={`${activeTab==='link2' ? styles.header_active :''} ${styles.header_links}`}
                ><p>Project</p></Link></li>
            </ul>
    </div>
  )
}

export default Header