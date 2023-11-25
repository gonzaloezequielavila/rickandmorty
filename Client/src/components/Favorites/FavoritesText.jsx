import React from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import styles from './FavoritesText.module.css'
import { orderFav,filterFav } from '../../redux/actions'

function FavoritesText({myFavorites}) {

  const [aux, setAux] = React.useState(false)

  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"]

  const dispatch = useDispatch()

  const handlerFilter = (event) => {
    dispatch(filterFav(event.target.value))
  }

  const handleOrder = (event) =>{
    dispatch(orderFav(event.target.value))
    setAux(!aux)
  }


  return (
<div>
  <div className={styles.optionsContainer}>
    <select className={styles.options} onChange={handleOrder}>
      <option value="Ascendente">&lt;</option>
      <option value="Descendente">&gt;</option>
    </select>

    <select  className={styles.options} onChange={handlerFilter}>
      {optionsGender.map(option => 
        <option key={option} value={option}>{option}</option>
      )}
    </select>
    </div>
    <div className={styles.container}>{
      myFavorites?.map(({id, name, species, image, status}) => (<Card 
        key= {id}
        id={id}
        name={name}
        status={status}
        species={species}
        image={image}
        />) )
      }
      
    </div>
  </div>
  )
}

export const mapStateToProps = (state) => {
  return{
      myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(FavoritesText);