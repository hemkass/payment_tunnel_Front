import { Action } from "../../customTypes/actions.type";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";

import { ProductTypes } from "./products.types";

export type GetCartaction = Action<string>;
export type AddProductAction = Action<productWithCart>;
export type AddFirstProductAction = Action<PRODUCT_TS>;
export type RemoveProductAction = Action<productWithCart>;

export interface productWithCart {
  product: PRODUCT_TS;
  cart: CART_TS;
}

export const AddProductOnCart = (payload: productWithCart) => {
  console.log("ACTION PRODUCT =====>", payload);
  return { type: ProductTypes.ADD_PRODUCT_CART, payload };
};

export const RemoveProductOnCart = (payload: productWithCart) => {
  console.log("ACTION REMOVE PRODUCT =====>", payload);
  return { type: ProductTypes.REMOVE_PRODUCT_CART, payload };
};

export const CreateCart = (payload: PRODUCT_TS) => {
  console.log("ADD PRODUCT NEW CART  =====>", payload);
  return { type: ProductTypes.ADD_FIRST_PRODUCT_CART, payload };
};
