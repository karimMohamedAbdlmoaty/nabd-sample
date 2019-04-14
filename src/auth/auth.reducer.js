import {GET_AUTH_STATE} from './auth.type';
import {LOAD_RESOURCES} from './auth.type';
import {CHANGE_RESOURCES} from './auth.type';


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
        console.log("action in resources",action)
        return Object.assign({}, {...state ,resources: action.resources});
// ---------------------------------------------------------------------------------------------------------
        case CHANGE_RESOURCES.SUCCESS:
        // catID , itemId    
        const res = state.resources
        const change = res.map((category)=> {
            // category.catID==action.catID? wantedCat= category : null 
            if (category.catId==action.catID) {
                category.categoryResources.map((resElement)=>{
                    if (resElement.id==action.itemId) {
                        console.log("resElement.checked before",resElement.checked)

                        resElement.checked=!resElement.checked
                        console.log("resElement.checked",resElement.checked)
                        return resElement
                    } else {
                        return resElement
                    }
                })
                return category
            } else {
                return category
            }
            console.log("category",category.catId)
        } )
        console.log("change",change)
        return Object.assign({}, {...state ,resources: change});

        default:
            return state;
    }
}

// [  , , , {catId: 1,
// categoryIcon: "ios-flag",
// categoryLabel: "مصر",
// categoryResources: Array(16),
//      0: {sourceLabel: " ONTV قناة", 
//          followers: "مثابع 1,015,585",
//          subTitle: "رقم كذا في مصر ", 
//          checked: true, id: 13}}]