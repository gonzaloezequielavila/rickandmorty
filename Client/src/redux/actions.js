import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./action-type"
import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty/fav';

// export const addFav = (payload) => {
//     return {type: ADD_FAV, payload}
// }

export const addFav = (character) => {
    return (dispatch) => {
       axios.post(`${URL}`, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };


 export const removeFav = (id) => {
    return (dispatch) => {
       axios.delete(`${URL}/${id}`).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
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
