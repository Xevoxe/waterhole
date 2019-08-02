import react from 'react';


const initialState = {
    isLoaded: false,
    error: null,
    items: []
}

const categoryReducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_CAT_BEGIN":
            return {
                ...state,
            };
        case "FETCH_CAT_SUCCESS":

            return {
                ...state,
                isLoaded: true,
                items: action.payload.categories
            };
        case "FETCH_CAT_ERROR":
            return {
                ...state,
                isLoaded: false,
                error: action.payload.error,
                items: []
            };
        default: {
            return state;
        }
    }
}
export default categoryReducer;
