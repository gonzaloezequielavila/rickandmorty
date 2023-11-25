import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react'
import validation from './Validation'




export default function Form({login}) {


    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) =>{
        let property = event.target.name;
        let value = event.target.value;

        setErrors(validation({...userData, [property]: value}))
        setUserData({...userData, [property]: value})

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // ahora ponemos donde queremos que se envie la info
        login(userData)
    }

  return (
    <div className={styles.container}>
      <form 
      className={styles.form}
      onSubmit={handleSubmit}>
        <div className={styles.input}>
            <label>Email:</label>
            <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value= {userData.email}/>
            {errors.email && (<p className={styles.error}>{errors.email}</p>)}
        </div>

        <div className={styles.input}>
            <label>Password:</label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value= {userData.password}/>
            {errors.password && (<p className={styles.error}>{errors.password}</p>)}
        </div>
        <button className={styles.button}>Submit! </button>
      </form>
    </div>
  )
}
