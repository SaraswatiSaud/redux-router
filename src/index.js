import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allreducers from './reducers/indexReducer';
// BrowserRouter interacts with history library and decides what to show on screen
import { BrowserRouter, Route } from 'react-router-dom';
import PostIndex from './components/postsIndex';
import promise from 'redux-promise';

const createStorewithMidddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStorewithMidddleware(allreducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostIndex} />
        </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
