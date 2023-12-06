import React from 'react'
import styles from './AboutText.module.css'
import { Link } from 'react-router-dom'
import ProfPic from '../../Assets/Profile.jpeg'

export default function AboutText() {
  return (
    <div className={styles.container}>
      <img src={ProfPic} alt="Profile_Picture" className={styles.image}/> 
      <p className={styles.text}>My name is Gonzalo, I'm new to the programming world but I've learned to deal with a whole new world in this past year, learning how to code, how to understand all these languages. I'm really excited to learn and to make new projects, new clients. I'm married, have 2 kids, a 2 and a 4 year old who drive me crazy with love. Everything I do and everything I plan to do is a projection of what I want my kids to look up to in the future. </p>
      <div className={styles.buttons}>
        <a href="https://github.com/gonzaloezequielavila" className={styles.button}>GitHub</a>
        <a href="https://www.linkedin.com/in/avilagonzalo/" className={styles.button}>LinkedIn</a>
        <a href="mailto:gonzaloezequielavila@gmail.com" className={styles.button}>Email</a>
      </div>
    </div>
  )
}
