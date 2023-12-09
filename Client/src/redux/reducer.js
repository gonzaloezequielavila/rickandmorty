import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./action-type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
                return { ...state, myFavorites: payload };

        case ORDER_FAV:
            let favoritesOrdered = state.myFavorites.sort((a,b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return {
                ...state,
                myFavorites: favoritesOrdered
            }
            
        case FILTER_FAV: 
            let favoriteFiltered = action.payload === "All" ? state.myFavorites : state.myFavorites.filter(char => char.gender === action.payload)
            
            return {
                ...state,
                myFavorites: favoriteFiltered
        }

        default:
            return state;
    }
}

export default rootReducer;