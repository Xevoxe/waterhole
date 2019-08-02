import axios from 'axios';

import {
        FETCH_CAT_BEGIN,
        FETCH_CAT_ERROR,
        FETCH_CAT_SUCCESS,
    } from './ActionTypes';



export const fetchCatBegin= ()=>({
    type: FETCH_CAT_BEGIN
});

export const fetchCatSuccess = categories => ({
    type: FETCH_CAT_SUCCESS,
    payload: { categories }
})

export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    payload: { error }
})

export function fetchCategories(){
    return dispatch => {
        dispatch(fetchCatBegin());
        axios.get("./api/categories")
        .then( res =>{
            dispatch(fetchCatSuccess(res.data))
            return res.data;
        }).catch( error => {
            dispatch(fetchCatError(error.res.data))
        });
    }
}
