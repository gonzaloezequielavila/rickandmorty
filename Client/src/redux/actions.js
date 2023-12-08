import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./action-type"
import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty/fav';

// export const addFav = (payload) => {
//     return {type: ADD_FAV, payload}
// }

export const addFav = (character) => {
    return async (dispatch) => {
      try{
         const {data} = await axios.post(`${URL}`, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      }catch(error){
         alert(error)
      }
    };
 };


 export const removeFav = (id) => {
    return async (dispatch) => {
      try{
         const {data} = await axios.delete(`${URL}/${id}`)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch(error){
         alert(error)
      }
    };
 };

export const filterFav = (gender) => {
    return {
        type: FILTER_FAV,
        payload: gender
    }
}

export const orderFav = (order) => {
    return {
        type: ORDER_FAV,
        payload: order
    }
}
