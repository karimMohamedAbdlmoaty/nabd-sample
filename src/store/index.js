// Redux 
import { applyMiddleware,combineReducers,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// App Data
import authReducer from '../auth/auth.reducer';
import homeReducer from '../home/home.reducer';

//Middleware 
const middleware = () => {
    return applyMiddleware(thunk, logger)
};

export default createStore(
    combineReducers({
        auth: authReducer,
        home: homeReducer
    }),
    {}, 
    middleware(),
);