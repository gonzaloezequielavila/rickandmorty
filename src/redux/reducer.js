import { ADD_FAV, REMOVE_FAV } from "./action-type";

const initialState = {
    myFavorites: [],
    detail: {}
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites:action.payload}
        case REMOVE_FAV:
            return {...state, myFavorites:state.myFavorites.filter(
                (char) => char.id !== action.payload
            ),
        };
        default:
            return{...state};
    }
}

export default rootReducer;