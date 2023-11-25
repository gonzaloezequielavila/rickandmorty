import styles from "./SearchBar.module.css";
import { useState, useRef } from "react";

export default function SearchBar({onSearch}) {

   // const handleSearch = () => {
   // const inputSearch = document.getElementById('inputSearch');
   // onSearch(inputSearch.value)
   // inputSearch.value = '';
   // }

const [id, setId] = useState('')
const buttonRef = useRef(null);

const handleChange = (event) => {
setId(event.target.value)
}

const handleSearch = (id) => {
   onSearch(id)
   setId('')
}

const handleKeyUp = (event) => {
   if (event.key === 'Enter') {
     buttonRef.current.focus(); // Enfocar el botón al presionar Enter
     handleSearch(id); // Llamar a la función handleSearch
   }
 };

   return (
      <div className={styles.container}>
         <input className={styles.searchBar} value = {id} id='inputSearch' type='text' placeholder='Search an id' onChange={handleChange} onKeyUp={handleKeyUp}/>
         <button className={styles.button} ref={buttonRef} onClick={()=>{handleSearch(id)}}>Add</button>
      </div>
   );
}
