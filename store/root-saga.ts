import { all, fork } from "redux-saga/effects";

import { watchProductsSagas } from "./products/products.sagas";

export function* rootSaga() {
  yield all([fork(watchProductsSagas)]);
}
