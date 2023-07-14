import React from 'react'
import Error from '../../Assets/error-404.jpg'
import styles from './Error404.module.css'

export default function Error404() {
  return (
    <div>
      <img className={styles.errorImage} src={Error} alt=""/>
    </div>
  )
}
