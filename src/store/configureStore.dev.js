// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, compose} from 'redux';
import movieApp from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist'


export default function configureStore(initialState) {
  const store = createStore(movieApp, initialState, compose(
    autoRehydrate(),
    // add support for Redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  persistStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
