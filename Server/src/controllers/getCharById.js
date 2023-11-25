const axios = require('axios')
const API_KEY = 'AIzaSyAv7MCb-eK6seN-mwNqtCRueig0EMQCLmo'
const URL = `https://rym2.up.railway.app/api/character/`

const getCharById = async (req, res)=>{
    // const {id} = req.params;
    const id = Number(req.params.id)
// Promesa

    // axios(`${URL}${id}?key${API_KEY}`)
    // .then(({data})=>{
    //     const {name, status, gender, species, origin, image}
    //     = data;
    //     const character = {id, name, status, gender, species, origin, image};

    //     return character.name
    //         ? res.status(200).json(character)
    //         : res.status(404).send('Not found')
    // })
    // .catch((err)=> {
    //     res.status(500).json({error: err.message})
    // })


    // axios.get(URL)
    //     .then(response=>{
    //         if(response.data){
    //             const {id, status, name, species, origin, image, gender} = response.data
    //                 res.json({id, status, name, species, origin, image, gender})
    //         }else{
    //             res.status(404).json({error: 'Not found'})
    //         }
    //     })
    //     .catch(error=>{
    //         res.status(500).json({message: error})
    //     })
// Async Await

try {
    const { data } = await axios.get(`${URL}${id}?key=${API_KEY}`); 
    const { name, status, gender, species, origin, image } = data;
    const character = { id, name, status, gender, species, origin, image };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send('Not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getCharById;