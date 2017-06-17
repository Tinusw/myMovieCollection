import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import movieApp from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist'


export default function configureStore(initialState) {
  const middewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  return createStore(movieApp, initialState, compose(
    applyMiddleware(...middewares),
    autoRehydrate()
    )
  );
}
