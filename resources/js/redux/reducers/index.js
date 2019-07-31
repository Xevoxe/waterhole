import {combineReducers } from 'redux';
import composerReducer from './composerReducer'
import categoryReducer from './categoryReducer';

export default combineReducers({
    composer: composerReducer,
    category: categoryReducer
});
