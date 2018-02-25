import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
  const reducer = compose(
    mergePersistedState()
  )(rootReducer, initialState, applyMiddleware(thunk))

  const storage = adapter(window.localStorage);

  const createPersistentStore = compose(
    persistState(storage, 'state')
  )(createStore);

  const store = createPersistentStore(reducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
};

export default configureStore();
