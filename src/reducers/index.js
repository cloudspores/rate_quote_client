import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Root reducer lives here - you can combine reducers here evidently
export default combineReducers({
    quotes: postReducer,
});
