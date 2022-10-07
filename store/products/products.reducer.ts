import { Reducer } from "redux";
import { CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";
import { ProductTypes } from "./products.types";

export type ProductState = {
  productList?: PRODUCT_TS[] | [];
  currentProduct?: PRODUCT_TS | null;
  error: string;
};

const initialState = {
  productList: [],
  currentProduct: null,
  error: "",
};

export const ProductReducer: Reducer<ProductState> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    //  ------------------------------------------------
    case ProductTypes.ADD_PRODUCT_CART:
      if (payload) {
        return {
          ...state,
          currentProduct: payload,
        };
      }
    //  --------------------------------------------------
    //

    default:
      return state;
  }
};
