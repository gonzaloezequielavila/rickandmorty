import styles from "./Card.module.css";


const Card = ({name, status, species, gender, origin, image, onClose}) => {
   
   return (
      <div className={styles.listItem}>
         {/* <button onClick={onClose}>X</button> */}
         <img src={image} alt={`No se encuentra la imagen de ${name}`} />
         <h2>{name}</h2>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>
   );
}

export default Card;