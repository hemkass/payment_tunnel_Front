import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { AddProductAction, AddProductOnCart } from "./products.action";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";
import { types } from "../carts/carts.types";
import { ProductTypes } from "./products.types";

export interface ResponseGeneratorProduct {
  config?: any;
  data: PRODUCT_TS;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ResponseGeneratorCart {
  config?: any;
  data: CART_TS;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* updateProductSaga(action: AddProductAction) {
  console.log("je suis dans ma saga et la bonne", action.payload);
  try {
    let productId = action.payload.id;
    let cartId = "08c00329-a7a7-460b-85c2-d35edb885203";
    const response: ResponseGeneratorCart = yield call(
      axios.post,
      `http://localhost:4000/products/add/cart/${productId}?cartId=${cartId}`,
      { payload: action.payload }
    );
    console.log("mes taches updatées", response.data);
    yield put({
      type: types.SET_CART,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchProductsSagas() {
  yield all([takeLatest(ProductTypes.ADD_PRODUCT_CART, updateProductSaga)]);
}
