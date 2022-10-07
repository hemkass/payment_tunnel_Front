import { compose, createStore, applyMiddleware, Middleware } from "redux";

import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// root-reducers

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);

export default store;
