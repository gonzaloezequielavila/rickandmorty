import styles from "./Card.module.css";


const Card = ({name, status, species, gender, origin, image, onClose, id}) => {
   
   return (
      <div className={styles.container}>
         <div className={styles.card}>
         <button className={styles.button} onClick={() => onClose(id)}>&times;</button>
         <div className={styles.overlay}>
            <img className={styles.cardImage} src={image} alt={`No se encuentra la imagen de ${name}`} />
            <h3 className={styles.cardName}>{name}</h3>
         </div>
            <div className={styles.cardDetails}>
               <p className={styles.cardInfo}>Status: {status}</p>
               <p className={styles.cardInfo}>Specie: {species}</p>
               <p className={styles.cardInfo}>Gender: {gender}</p>
               <p className={styles.cardInfo}>Origin: {origin}</p>
            </div>
         </div>
      </div>
   );
}

export default Card;