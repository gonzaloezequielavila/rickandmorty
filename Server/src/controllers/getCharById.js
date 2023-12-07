const axios = require('axios')


const getCharById = (res,id) => {
  axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`) //siempre que llamemos axios hace automaticamente un llamado tipo .get
}


module.exports = getCharById