import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './DetailText.module.css'

export default function DetailText() {

    const {id} = useParams()
    const [characterDetail, setCharacterDetail] = useState({})


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).
        then(({ data }) => {
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
   <div className={styles.card}>
{characterDetail ? (
 <div className={styles.cardContent}> 
    <h2 className={styles.cardTitle}>{characterDetail.name} </h2>
    <h4>{characterDetail.status}</h4>
    <h4>{characterDetail.species}</h4>
    <h4>{characterDetail.gender}</h4>
    <h4>{characterDetail.origin?.name}</h4>
    <img className={styles.characterImage} src={characterDetail.image} alt=""/>
 </div>
) : <h3> Loading ...</h3>}
   </div>
 )
}
