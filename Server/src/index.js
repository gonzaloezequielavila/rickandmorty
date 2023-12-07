const http = require('http'); //Es nativo de Node.js, no hay que instalarlo. Podemos trabajar con servidores
const data = require('./utils/data')

http.createServer((req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*'); //Cualquier dominio puede acceder o tener control a lo que devolvamos de nuestro servidor

  if(req.url.includes('/rickandmorty/character')){
    const id = req.url.split('/').pop() // Vamos a dividir el URL en las / y crear un array y almacenar el ultimo valor en id
    const character = data.find((char)=>char.id === Number(id)) // Va a iterar en cada character de data hasta que id coincida

    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(JSON.stringify(character)); //Convierte el json en string
  }

}).listen(3001, ()=>{
  console.log('Servidor en linea');
})