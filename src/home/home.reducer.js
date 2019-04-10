// import {GET_AUTH_STATE} from './home.type';


export const initialState = {
    news: "newssssss",
    property:"fdjfdj"
};
export default homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // case GET_AUTH_STATE.PENDING:
        //    return {
        //        ...state,
        //        isPendingAuthState: true,
        //     }
        // break;

        // case GET_AUTH_STATE.PENDING:
        //     return {
        //         ...state,
        //         authenticated_status: action.payload,
        //     }    
        // break;

        // case GET_AUTH_STATE.PENDING:
        //     return {
        //         ...state,
        //         error: action.payload,
        //     }
        // break;

        default:
            return state;
        break;
    }
}