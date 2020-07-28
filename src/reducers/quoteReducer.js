import { FETCH_QUOTES } from '../actions/types';

// Evaluates any actions that are performed
// Action is: fetching quotes

// Have types created for our actions -> basically constants - see types.js in actions folder:
// FETCH_QUOTES

// The items array represents the quotes coming in from our action
// -- Our action is where we put the fetch request
const initialState = {
    items: [],
};

// A reducing function that returns the next state tree, given the current state tree and action to handle.
// --------------------------------------------------------------------------------------------------------
// Evaluates the type as appropriate for the action type.
// The action includes a type - this is what gets evaluated
// -> see fetchQuotes() in ./actions/postActions.js for where action gets created.
//
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_QUOTES:
            // Return the current state and payload to items
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}
