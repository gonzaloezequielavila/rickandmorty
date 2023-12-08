const axios = require('axios');
const API_KEY = 'pi-gonzaloezequielavila';
const URL = `https://rym2.up.railway.app/api/character/`


const getCharById = async (req, res)=>{
  // const {id} = req.params;
  const id = Number(req.params.id)
  const url = `${URL}${id}?key=${API_KEY}`
try{
  const {data} = await axios(url)
  
  const {id, name, gender, species, origin, image, status} = data;
  const character = {id, name, gender, species, origin, image, status};
  
    // if (character.name) return res.status(200).json(character);
    return (character.name) 
    ? res.status(200).json(character) 
    : res.status(404).send('Not found');
} catch (error){
    res.status(500).json({error:error.message})
}
}

module.exports = getCharById












// const axios = require('axios')
// const URL = `https://rym2.up.railway.app/api/character/`
// const API_KEY = `pi-gonzaloezequielavila`


// const getCharById = (res,id) => {
//   axios(`${URL}${id}?key=${API_KEY}`) //siempre que llamemos axios hace automaticamente un llamado tipo .get
//   .then(({data}) => {
//     const {id,name,gender,species,origin,image,status} = data;
//     const character = {id,name,gender,species,origin,image,status};
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     return res.end(JSON.stringify(character))
//   })
//   .catch((err)=>{
//     res.writeHead(500, {'Content-Type': 'text/plain'})
//     return res.end(err.message)
//   });
// }


// module.exports = getCharById