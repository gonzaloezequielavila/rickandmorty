import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.container}>
   <h1 className={styles.home}>Home</h1>
   <div className={styles.listItem}>
      {characters.map(character => 
         <Card
         key={character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}
         />)}
   </div>
   </div>
   );
}