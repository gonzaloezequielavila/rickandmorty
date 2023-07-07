import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {

   // const handleSearch = () => {
   // const inputSearch = document.getElementById('inputSearch');
   // onSearch(inputSearch.value)
   // inputSearch.value = '';
   // }

const [id, setId] = useState('')

const handleChange = (event) => {
setId(event.target.value)
}

const handleSearch = (id) => {
   onSearch(id)
   setId('')
}

   return (
      <div className={styles.container}>
         <input className={styles.searchBar} value = {id} id='inputSearch' type='text' placeholder='Search an id' onChange={handleChange}/>
         <button className={styles.button} onClick={()=>{handleSearch(id)}}>Add</button>
      </div>
   );
}
