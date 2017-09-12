import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import timezoneApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  timezoneApp,
  undefined,
  compose(
    applyMiddleware(),
    autoRehydrate(),
  ),
);

// make the store persistent
persistStore(store);

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
