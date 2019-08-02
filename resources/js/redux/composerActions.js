import {COMPOSER_NEW,
        COMPOSER_CANCEL,
        COMPOSER_POST
                        } from './ActionTypes';

export const composerNew = ()=>({type: COMPOSER_NEW});
export const composerCancel = () =>({type: COMPOSER_CANCEL});
export const composerPost = (payload) =>(
    {
        type: COMPOSER_POST
    }
)

