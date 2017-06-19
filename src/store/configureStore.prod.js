import { createStore, compose} from 'redux'
import movieApp from '../reducers'
import { autoRehydrate } from 'redux-persist'


export default function configureStore(initialState) {
  return createStore(movieApp, initialState, compose(
    autoRehydrate()
    )
  )
}
