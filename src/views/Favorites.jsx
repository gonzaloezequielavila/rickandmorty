import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card/Card'

function Favorites({myFavorites}) {
    return (
      <div>{
          myFavorites?.map(({id, name, species, image, status}) => (<Card 
          key= {id}
          id={id}
          name={name}
          status={status}
          species={species}
          image={image}
          />) )
          }</div>
    )
  }

export const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps)(Favorites);