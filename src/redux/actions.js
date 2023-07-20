import { ADD_FAV, REMOVE_FAV } from "./action-type"


export const addFav = (payload) => {
    return {type: addFav, payload}
}
export const removeFav = (id) => {
    return {type: removeFav, payload: id}
}