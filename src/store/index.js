import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'app/store/modules/rootSaga';

const persistConfig = {
  key: 'Pokedex',
  storage: AsyncStorage,
  whitelist: ['pokemon']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const enhancer = __DEV__
  ? compose(reactotron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

let store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
