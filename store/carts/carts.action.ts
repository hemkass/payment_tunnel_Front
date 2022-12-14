import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { Action } from "../../customTypes/actions.type";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";

import { types } from "./carts.types";

export type GetCartaction = Action<string>;
export type SetCartaction = Action<CART_TS>;
export type DeleteCartaction = ActionCreatorWithoutPayload;
export const SetCart = (payload: CART_TS) => {
  console.log("AddDate =====>", payload);
  return { type: types.SET_CART, payload };
};

export const FetchCart = (payload: CART_TS) => {
  // console.log("AddDate =====>", payload);
  return { type: types.GET_CART, payload };
};

export const DeleteCart = () => {
  // console.log("AddDate =====>", payload);
  return { type: types.DELETE_CART };
};
