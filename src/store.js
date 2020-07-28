import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};
const middleware = [thunk];

// A store holds the whole state tree of the application.
// The only way to change the state inside it is to dispatch
// an action on it.
//
// A store is not a class. It's just an object with a few methods on it.
//
// To create it, pass your root reducing function to createStore.
// Store Methods are:
// - getState()
// - dispatch(action) -> see fetchQuotes() in ./actions/postActions.js
// - subscribe(listener)
// - replaceReducer(nextReducer)
//
// createStore(reducer, [preloadedState], [enhancer])
// - reducer (Function) -> a reducing function that returns the next state tree, given the current state tree and action to handle.
//              See ./reducers/postReducer.js. May combine other reducers and pass in here. For example auth reducer for autehntication.
// - [preloadedState] (any) -> The inital state.
// - [enhancer] (Function) -> The store enhancer. In this case for middleware and Redux chrome extension for monitoring states and actions.
const store = createStore(
    rootReducer,
    initalState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
