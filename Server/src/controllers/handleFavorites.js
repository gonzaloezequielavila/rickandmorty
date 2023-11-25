// controllers/handleFavorites.js
let myFavorites = [];

// Función para agregar un personaje a favoritos
const postFav = (req, res) => {
  // Obtiene el personaje desde el cuerpo de la solicitud (req.body)
  const { character } = req.body;

  // Agrega el personaje a la lista de favoritos
  myFavorites.push(character);

  // Devuelve la lista actualizada de favoritos en formato JSON
  res.json(myFavorites);
};

// Función para eliminar un personaje de favoritos
const deleteFav = (req, res) => {
  // Obtiene el id del personaje desde los parámetros de la solicitud (req.params)
  const { id } = req.params;

  // Filtra los favoritos para eliminar el personaje con el mismo id
  myFavorites = myFavorites.filter(character => character.id !== id);

  // Devuelve la lista actualizada de favoritos en formato JSON
  res.json(myFavorites);
};

// Exporta las funciones
module.exports = { postFav, deleteFav };