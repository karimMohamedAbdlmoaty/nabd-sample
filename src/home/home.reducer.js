import {GET_AUTH_STATE} from './home.type';
import axios from 'axios';


export const initialState = {
    news: "newssssss",
    property:"fdjfdj"
};
export const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // case GET_AUTH_STATE.PENDING:
        //    return {
        //        ...state,
        //        isPendingAuthState: true,
        //     }
        // break;


        default:
            return state;
        break;
    }
}

// export const resourcesReducer = (state = {}, action = {}) => {
//     switch (action.type) {
//         // case LOAD_COURSES_SUCCESS:
//         // return action.courses;
//         // break;

//         default:
//             return state;
//         break;
//     }
// }