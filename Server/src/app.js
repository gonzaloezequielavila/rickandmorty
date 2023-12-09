const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index')


const server = express(); //Esto crea el servidor, usando una instancia de express

server.use(morgan('dev')); //Midware

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header(
//      'Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header(
//      'Access-Control-Allow-Methods',
//      'GET, POST, OPTIONS, PUT, DELETE'
//   );
//   next();
// });

server.use(cors()); // esto reemplaza todo lo que había entre la linea 13 a la 25

server.use(express.json()); //Esto nos permite poder mostrar los json

server.use('/rickandmorty', router) // Esto agrega este string antes de todas las rutas

/*
request --> morgan --> cors --> express.json() -->ruta(path)
req         req         req       req
*/


// const http = require('http'); //Es nativo de Node.js, no hay que instalarlo. Podemos trabajar con servidores
// const data = require('./utils/data')
// const getCharById = require('./controllers/getCharById')

// http.createServer((req, res)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*'); //Cualquier dominio puede acceder o tener control a lo que devolvamos de nuestro servidor

//   const {url} = req;

// if(req.url.includes('/rickandmorty/character')){
//   const id = url.split('/').pop()
//   getCharById(res, id);
// }

// }).listen(3001, ()=>{
//   console.log('Servidor en linea');
// })

module.exports = server;