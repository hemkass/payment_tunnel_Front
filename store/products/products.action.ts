import { Action } from "../../customTypes/actions.type";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";

import { ProductTypes } from "./products.types";

export type GetCartaction = Action<string>;
export type AddProductAction = Action<PRODUCT_TS>;

export const AddProductOnCart = (payload: PRODUCT_TS) => {
  console.log("ACTION PRODUCT =====>", payload);
  return { type: ProductTypes.ADD_PRODUCT_CART, payload };
};
