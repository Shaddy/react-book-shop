"use strict"

import React from 'react';
import { render } from 'react-dom';


import { createStore } from 'redux';

import reducers from './reducers/index';

import { addToCart } from './actions/cartActions';
import {applyMiddleware} from 'redux';

import logger from 'redux-logger';

import {
    postBooks,
    updateBooks,
    deleteBooks
} from './actions/bookActions';
import { Provider } from 'react-redux';

const middleware = applyMiddleware(logger);


const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
       <BooksList />
    </Provider>, document.getElementById('app')
);

store.dispatch(updateBooks({
    id: 2,
    title: 'Learn React in 48h'
}))

store.dispatch(addToCart([{
    id: 1
}]))
