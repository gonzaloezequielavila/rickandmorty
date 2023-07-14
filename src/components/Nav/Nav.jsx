import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link, NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav({onSearch}) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
      <Link to='/home'>
      <button className={styles.button}>Home</button>
      </Link>
      
      <Link to='/about'>
      <button className={styles.button}>About</button>
      </Link>
      </div>

      <SearchBar onSearch={onSearch}/>
    </div>
  )
}
