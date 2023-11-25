import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./action-type";
import axios from 'axios';

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {}
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
                return { ...state, myFavorites: payload };

        case ORDER_FAV:
            let favoritesOrdered = state.allFavorites.sort((a,b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return {
                ...state,
                myfavorites: favoritesOrdered
            }
            
        case FILTER_FAV: 
            let favoriteFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
            
            return {
                ...state,
                myFavorites: favoriteFiltered
        }

        default:
            return state;
    }
}

export default rootReducer;