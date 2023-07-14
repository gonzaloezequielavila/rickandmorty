import style from './App.module.css';
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

//! Components
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail.jsx'
import About from './views/About.jsx';
import Home from "./views/Home.jsx"
import Error404 from './components/Error/Error404';
import Form from './components/Form/Form';

//React.useState
function App() {
   // Por destructuring, recibimos en la primer posición al estado y en la segunda posicion el manejador de estado
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   // ! pathname 
   const {pathname} = useLocation(); 
   // Tenemos 2 formas de trabajar esto, fetch y axios.

   /*
   Fetch -> res => res.json()
      + es nativo, no hay que instalar nada

   Axios -> res => res.data
      - hay que instalarlo
   */
   const navigate = useNavigate();
   const EMAIL = "example@gmail.com";
   const PASSWORD = "pass123";

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Invalid Email or Password")
      }

   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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

      
   };

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }

   return (
      <div className={style.App}>
      {pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route 
               path="/" 
               element={<Form login={login}/>}/>

            <Route 
               path="/home" 
               element={<Cards characters={characters} onClose={onClose}/>}/>

            <Route 
               path="/detail/:id" 
               element={<Detail/>}/>

            <Route 
               path="/about" 
               element={<About/>}/>

            <Route 
               path="*" 
               element={<Error404/>}/>

         </Routes>
      </div>
   );
}

export default App;
