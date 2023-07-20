import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({name, status, species, gender, origin, image, id})
      }
   }

   
   return (
      <div className={styles.container}>

         <div className={styles.card}>

         <button className={styles.button} onClick={() => onClose(id)}>&times;</button>
         <div className={styles.overlay}>
            <img className={styles.cardImage} src={image} alt={`No se encuentra la imagen de ${name}`} />
            <Link to={`/detail/${id}`}>
               <h3 className={styles.cardName}>{name}</h3>
            </Link>
         <div className={styles.favoriteContainer}>
            {
            isFav ? 
            (<button className={styles.favoriteButton} onClick={handleFavorite}>❤️</button>) : 
            (<button className={styles.unFavoriteButton} onClick={handleFavorite}>🤍</button>)
            }
         </div>
         </div>
            <div className={styles.cardDetails}>
               {/* <p className={styles.cardInfo}>Status: {status}</p> */}
               <p className={styles.cardInfo}>Specie: {species}</p>
               {/* <p className={styles.cardInfo}>Gender: {gender}</p> */}
               <p className={styles.cardInfo}>Origin: {origin}</p>
            </div>
         </div>
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   };
}
export function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);