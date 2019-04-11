import {GET_AUTH_STATE} from './auth.type';
import {LOAD_RESOURCES} from './auth.type';


export const initialState = {
    isPendingAuthState: "ok",
    property:333
};


export const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_AUTH_STATE.PENDING:
           return {
               ...state,
               isPendingAuthState: true,
            }
        break;

        // case GET_AUTH_STATE.PENDING:
        //     return {
        //         ...state,
        //         authenticated_status: action.payload,
        //     }    
        // break;

        default:
            return state;
    }
}


export const resourcesInitialState = {
    resources:[]
};


export const resourcesReducer = (state= resourcesInitialState , action = {}) => {
    switch (action.type) {
        case LOAD_RESOURCES.SUCCESS:
        // return action.resources;
        console.log("action in resources",action)
        return Object.assign({}, {...state ,resources: action.resources});

        default:
            return state;
    }
}