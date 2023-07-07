import {useState} from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import styles from './App.module.css';

//React.useState
function App() {
   // Por destructuring, recibimos en la primer posición al estado y en la segunda posicion el manejador de estado
   const [characters, setCharacters] = useState([]);

   // Tenemos 2 formas de trabajar esto, fetch y axios.

   /*
   Fetch -> res => res.json()
      + es nativo, no hay que instalar nada

   Axios -> res => res.data
      - hay que instalarlo
   */
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data})=>{
         if(!characters.find(char => char.id === data.id)){
            if(data.name){
               setCharacters((oldCharacters) => [...oldCharacters, data])
            }
         } else {
            window.alert(`A character with id number ${id} already exists`)
         }
      })
      .catch(err => window.alert(err))

      //29:47
      
   };

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }

   return (
      <>
      <div className={styles.App}>
         <div>
         <Nav onSearch={onSearch}/>
         </div>
         <div>
         <Cards characters={characters} onClose={onClose}/>
         </div>
      </div>

      </>
   );
}

export default App;
