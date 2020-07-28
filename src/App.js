import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import Posts from './components/Quotes';
import QuoteForm from './components/QuoteForm';

import store from './store';

// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
// Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level,
// with the entire app’s component tree inside of it.

// Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-title'></h1>
                    </header>
                    <div className='container'>
                        <div className='row'>
                            <QuoteForm />
                        </div>
                        <div className='row'>
                            <Posts />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
