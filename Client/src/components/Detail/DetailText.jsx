import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './DetailText.module.css'

export default function DetailText() {

    const {id} = useParams()
    const [characterDetail, setCharacterDetail] = useState({})


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
            // console.log(data)
           } else {
              window.alert(`There's no character with that id`);
           }
        });
        return setCharacterDetail({});
     }, [id]);

  return (
   <div className={styles.container}>
   <h1 className={styles.pageTitle}>{characterDetail.name}</h1>

   <div className={styles.card}>
   {characterDetail ? (
   <div className={styles.cardContent}> 
   <img className={styles.characterImage} src={characterDetail.image} alt=""/>
    {/* <h2 className={styles.cardTitle}>{characterDetail.name} </h2> */}
    <h4 className={styles.details}>Status: {characterDetail.status}</h4>
    <h4 className={styles.details}>Specie: {characterDetail.species}</h4>
    <h4 className={styles.details}>Gender: {characterDetail.gender}</h4>
    <h4 className={styles.details}>Origin: {characterDetail.origin?.name}</h4>
 </div>
) : <h3> Loading ...</h3>}
   </div>
</div>
 )
}
