import { compose, createStore, applyMiddleware, Middleware } from "redux";

import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);

/* const persistedReducer = persistReducer(persistConfig, rootReducer); */

/* export const store = createStore(
  persistedReducer,
  bindMiddleware([sagaMiddleware])
);
sagaMiddleware.run(rootSaga); */

/* export const persistor = persistStore(store); */
export default store;
