import { Reducer } from "redux";
import { CART_TS } from "../../customTypes/DB.types";
import { types } from "./carts.types";

export type CartState = {
  currentCart?: CART_TS | null;
  error: string;
};

const initialState = {
  currentCart: null,

  error: "",
};

export const CartReducer: Reducer<CartState> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    //  ------------------------------------------------
    case types.GET_CART:
      if (payload) {
        return {
          ...state,
          currentCart: payload,
        };
      }
    //  -------------------------------------------------

    case types.SET_CART:
      if (payload) {
        console.log("current cart set", payload);
        return {
          ...state,
          currentCart: payload,
        };
      }
    //

    default:
      return state;
  }
};
