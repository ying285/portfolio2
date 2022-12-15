import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.scss'
import Link from 'next/link'

const Header = () => {
  
  const router = useRouter()

  

  const handleClick1 = (e:any) => {
    e.preventDefault()
    router.push('/resume')
  }

const style1 = {
    color: router.asPath === '/resume' ? 'rgb(255, 200, 0)' : '',
  }


  

  const handleClick2 = (e:any) => {
    e.preventDefault()
    router.push('/project')
  }

const style2 = {
    color: router.asPath === '/project' ? 'rgb(255, 200, 0)' : '',
  }


  return (
    <div className={styles.header}>
            <div className={styles.header_title}>
                <div className={styles.header_symbol}></div>
                 <Link href='/' className={styles.header_links}><h5 className={styles.header_name}>Ying Wang</h5></Link></div>
            <ul className={styles.header_menu}>
                <li ><Link onClick={handleClick1} style={style1} href='/resume'  className={`${styles.header_links}`}><p>Resume</p></Link></li>
                 <li className={styles.header_border}></li> 
                <li ><Link onClick={handleClick2} style={style2} href='/project'
                className={` ${styles.header_links}`}
                ><p>Project</p></Link></li>
            </ul>
    </div>
  )
}

export default Header