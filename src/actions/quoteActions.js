import { FETCH_QUOTES } from './types';

// Create and dispatch FETCH_QUOTES action to the Reducer
// This function is an action creator
//

// The thunk middleware allows us to call the dispatch function directly
// so that we may make asynchronous requests.
// dispatch is like a resolver and a promise. Whenever we want to send the data we call dispatch like calling resolve

// Call the fetch request to create FETCH_QUOTES action from results
// - dispatch FETCH_QUOTES to the reducer

// Iterate and build an array of encoded strings, then join to form query string

const getQueryString = (params) => {
    return Object.keys(params)
        .reduce((result, key) => {
            return [
                ...result,
                `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
            ];
        }, [])
        .join('&');
};

const BASE_URL =
    'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?';

export const fetchQuotes = (params) => (dispatch) => {
    fetch(BASE_URL + getQueryString(params), {
        headers: {
            'Cache-Control': 'no-cache',
            'Authorization': 'OU-AUTH '+ `${process.env.REACT_APP_API_KEY}`,
        },
    })
        .then((res) => res.json())
        .then((quotes) =>
            dispatch({
                type: FETCH_QUOTES,
                payload: quotes,
            })
        );
};
