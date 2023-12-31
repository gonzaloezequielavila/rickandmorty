import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import DetailText from '../components/Detail/DetailText';

export default function Detail() {
    const {id} = useParams();
    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({data}) => {
            if(data.name){
                setCharacterDetail(data);
            } else {
                window.alert(`There is no character with the id ${id}`)
            }
        });
        return setCharacterDetail({});
    }, [id])

  return (
    <div>
      <DetailText character={characterDetail}/>
    </div>
  )
}
