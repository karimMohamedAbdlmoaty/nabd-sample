import axios from 'axios';
import {LOAD_RESOURCES} from './auth.type';
import {CHANGE_RESOURCES} from './auth.type';


export function loadResourcesSuccess(resources){
    return { type: LOAD_RESOURCES.SUCCESS, resources}
}

export function changeResourcesSuccess(catID,itemId){
    return { type: CHANGE_RESOURCES.SUCCESS, catID , itemId}
}

export function loadResources () {
    return function(dispatch) {
        return axios.get('https://www.google.com/')
    };
}

