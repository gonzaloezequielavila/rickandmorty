import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {

   const handleSearch = () => {
   const inputSearch = document.getElementById('inputSearch');
   onSearch(inputSearch.value)
   inputSearch.value = '';
   }

   return (
      <div className={styles.container}>
         <input className={styles.searchBar}id='inputSearch' type='search' placeholder='Ingresa un ID' />
         <button className={styles.button} onClick={()=>{handleSearch()}}>Agregar</button>
      </div>
   );
}
