import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

// Root reducer lives here - you can combine reducers here evidently
export default combineReducers({
    quotes: quoteReducer,
});
