
const initialState = {
    isActive: false,
};

const composerReducer = (state = initialState,action)=>{
    switch(action.type){
        case "COMPOSER_NEW":
                console.log("new"); 
            if(state.isActive){
                return state;
            }else
            return {
                ...state,
                isActive: !state.isActive
            };
        case "COMPOSER_CANCEL" :
            return {
                ...state,
                isActive: !state.isActive
            };
        default: {
            return state;
        }
    }
};

export default composerReducer;