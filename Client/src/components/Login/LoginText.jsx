import React from 'react'
import styles from "./LoginText.module.css"

export default function LoginText() {
  return (
    <div>
        <input/>
        <input/>
        {/* <Link to="/home"> */}
            <button className={styles.LoginButton}>Login</button>
        {/* </Link> */}
    </div>
  )
}
