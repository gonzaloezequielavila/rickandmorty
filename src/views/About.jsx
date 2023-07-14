import React from 'react'
import AboutText from '../components/AboutText/AboutText'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
       <h1 className={styles.heading}>This is the part where we talk about me</h1>
       <h3 className={styles.subheading}>Gonzalo Avila</h3>
       <AboutText/>
    </div>
  )
}
