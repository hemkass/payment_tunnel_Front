import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  AddFirstProductAction,
  AddProductAction,
  AddProductOnCart,
  RemoveProductAction,
} from "./products.action";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";
import { types } from "../carts/carts.types";
import { ProductTypes } from "./products.types";
import { useSelector } from "react-redux";
import { RootState } from "@customTypes/actions.type";

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

export interface ResponseGeneratorCartExpress {
  config?: any;
  data: { message: CART_TS };
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* AddProductSaga(action: AddProductAction) {
  console.log("je suis dans ma saga et la bonne add product", action.payload);
  try {
    let productId = action.payload.product.id;
    let cartId = action.payload.cart.id;
    const response: ResponseGeneratorCart = yield call(
      axios.post,
      `http://localhost:4000/products/add/cart/${productId}?cartId=${cartId}`,
      { payload: action.payload }
    );
    console.log("mes taches updatées addproductsaga", response.data);
    yield put({
      type: types.SET_CART,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}
export function* RemoveProductSaga(action: RemoveProductAction) {
  console.log("je suis dans ma saga remove et la bonne", action.payload);
  try {
    let productId = action.payload.product.id;
    let cartId = action.payload.cart.id;
    const response: ResponseGeneratorCartExpress = yield call(
      axios.patch,
      `http://localhost:4000/products/remove/${productId}/${cartId}`,
      { payload: action.payload }
    );
    console.log("mes taches updatées", response.data.message);

    yield put({
      type: types.SET_CART,
      payload: response.data.message,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* AddFirstProductSaga(action: AddFirstProductAction) {
  console.log("Add first product", action.payload);
  try {
    let productId = action.payload.id;

    const response: ResponseGeneratorCartExpress = yield call(
      axios.post,
      `http://localhost:4000/products/add/cart/${productId}`,
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
  yield all([takeLatest(ProductTypes.ADD_PRODUCT_CART, AddProductSaga)]);
  yield all([takeLatest(ProductTypes.REMOVE_PRODUCT_CART, RemoveProductSaga)]);
  yield all([
    takeLatest(ProductTypes.ADD_FIRST_PRODUCT_CART, AddFirstProductSaga),
  ]);
}
