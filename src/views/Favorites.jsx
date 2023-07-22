import React from 'react'
import FavoritesText from '../components/Favorites/FavoritesText'
import styles from './Favorites.module.css'

export default function Favorites() {
    return (
      <div className={styles.container}>
        <h1 className={styles.text}>Favorites:</h1>
        <FavoritesText/>
      </div>
    )
  }
