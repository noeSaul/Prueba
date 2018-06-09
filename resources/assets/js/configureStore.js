import { createStore, applyMiddleware, combineReducers, compose} from 'redux' //Nuevo Enner
import thunkMiddleware  from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './redux/reducers'

//pesist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['defaultData',"login","navigationProps"]
}


const persistedReducer = persistReducer(persistConfig, reducer);
//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
  //    loggerMiddleware,
    ),
  );
  let store = createStore(persistedReducer, initialState, enhancer);
  let persistor = persistStore(store);
  return { store, persistor } ;
}

const configure = configureStore({});
export default configure;
